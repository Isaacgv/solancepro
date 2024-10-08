use anchor_lang::prelude::*;

pub mod constant;
pub mod error;
pub mod instructions;
pub mod states;
use crate::{constant::*, error::*, states::*, instructions::*};

declare_id!("");

#[program]
pub mod clever_project {
    use super::*;

    pub fn initialize_user(ctx: Context<InitializeUser>) -> Result<()> {
        // Initialize user profile with default data
        let user_profile = &mut ctx.accounts.user_profile;
        user_profile.authority = ctx.accounts.authority.key();
        user_profile.last_project = 0;
        user_profile.project_count = 0;
        user_profile.last_proposal = 0;
        user_profile.proposal_count = 0;

        Ok(())
    }

    pub fn add_project(
        ctx: Context<AddProject>,
        _title: String,
        _description: String,
        _features: String,
        _deliverables: String,
        _budget: u8,
    ) -> Result<()> {
        let project_account = &mut ctx.accounts.project_account;
        let user_profile = &mut ctx.accounts.user_profile;

        // Fill contents with argument
        project_account.authority = ctx.accounts.authority.key();
        project_account.idx = user_profile.last_project;
        project_account.title = _title;
        project_account.description = _description;
        project_account.features = _features;
        project_account.deliverables = _deliverables;
        project_account.budget = _budget;
        project_account.marked = false;
        project_account.status = 0;

        // Increase project idx for PDA
        user_profile.last_project = user_profile.last_project.checked_add(1).unwrap();

        // Increase total project count
        user_profile.project_count = user_profile.project_count.checked_add(1).unwrap();

        Ok(())
    }

    pub fn add_proposal(
        ctx: Context<AddProposal>,
        _description: String,
        _budget: u8,
        project_idx: u8,
    ) -> Result<()> {
        let proposal_account = &mut ctx.accounts.proposal_account;
        let user_profile = &mut ctx.accounts.user_profile;

        // Fill contents with argument
        proposal_account.authority = ctx.accounts.authority.key();
        proposal_account.idx = user_profile.last_proposal;
        proposal_account.project_idx = project_idx;
        proposal_account.description = _description;
        proposal_account.budget = _budget;

        // Increase project idx for PDA
        user_profile.last_proposal = user_profile.last_proposal.checked_add(1).unwrap();

        // Increase total project count
        user_profile.proposal_count = user_profile.proposal_count.checked_add(1).unwrap();

        Ok(())
    }

    pub fn status_proposal(
        ctx: Context<StatusProposal>,
        proposal_idx: u8,
        project_idx: u8,
        _status: u8,
    ) -> Result<()> {
        let proposal_account = &mut ctx.accounts.proposal_account;

        // Mark project
        proposal_account.accepted = _status;
        Ok(())
    }

    pub fn mark_project(ctx: Context<MarkProject>, project_idx: u8) -> Result<()> {
        let project_account = &mut ctx.accounts.project_account;
        require!(!project_account.marked, ProjectError::AlreadyMarked);

        // Mark project
        project_account.marked = true;
        Ok(())
    }

    pub fn chage_status_project(
        ctx: Context<StatusProject>,
        project_idx: u8,
        _status: u8,
    ) -> Result<()> {
        let project_account = &mut ctx.accounts.project_account;
        require!(!project_account.marked, ProjectError::AlreadyMarked);
        project_account.status = _status;
        if _status == 2 {
            project_account.marked = true;
        }

        Ok(())
    }

    pub fn remove_project(ctx: Context<RemoveProject>, project_idx: u8) -> Result<()> {
        // Decreate total todo count
        let user_profile = &mut ctx.accounts.user_profile;
        let project_account = &mut ctx.accounts.project_account;
        require!(project_account.status != 2, ProjectError::Executing);
        if project_account.status != 2 {
            user_profile.project_count = user_profile.project_count.checked_sub(1).unwrap();
        }

        // No need to decrease last project idx

        // Todo PDA already closed in context

        Ok(())
    }


    pub fn accept_transaction(ctx: Context<AcceptTransaction>) -> Result<()> {
        // Get the mutable reference to the escrow account
        let escrow = &mut ctx.accounts.escrow;
    
        // Ensure that side_a is the one calling this function
        require_keys_eq!(ctx.accounts.side_a.key(), escrow.side_a, ProjectError::Unauthorized);
    
        // Update the escrow to indicate that side_a has accepted the transaction
        escrow.side_a_accepted = true;
    
        Ok(())
    }

    

}

#[derive(Accounts)]
pub struct AcceptTransaction<'info> {
    #[account(mut)]
    pub escrow: Account<'info, Escrow>,
    ///CHECK: unchecked for now, we are just asserting this matches the key in the escrow
    #[account(mut, signer)]
    pub side_a: UncheckedAccount<'info>,
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeUser<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<UserProfile>(),
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct AddProject<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        init,
        seeds = [PROJECT_TAG, authority.key().as_ref(), &[user_profile.last_project as u8].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<ProjectAccount>() + 8,
    )]
    pub project_account: Box<Account<'info, ProjectAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(project_idx: u8)]
pub struct AddProposal<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        init,
        seeds = [PROPOSAL_TAG, authority.key().as_ref(), &[user_profile.last_proposal as u8].as_ref(), &[project_idx].as_ref()],
        bump,
        payer = authority,
        space = std::mem::size_of::<ProposalAccount>() + 8,
    )]
    pub proposal_account: Box<Account<'info, ProposalAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(project_idx: u8)]
pub struct MarkProject<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        mut,
        seeds = [PROJECT_TAG, authority.key().as_ref(), &[project_idx].as_ref()],
        bump,
        has_one = authority,
    )]
    pub project_account: Box<Account<'info, ProjectAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(project_idx: u8)]
pub struct StatusProject<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        mut,
        seeds = [PROJECT_TAG, authority.key().as_ref(), &[project_idx].as_ref()],
        bump,
        has_one = authority,
    )]
    pub project_account: Box<Account<'info, ProjectAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(proposal_idx: u8, project_idx: u8)]
pub struct StatusProposal<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        mut,
        seeds = [PROPOSAL_TAG, authority.key().as_ref(), &[proposal_idx].as_ref(), &[project_idx].as_ref(),],
        bump,
        has_one = authority,
    )]
    pub proposal_account: Box<Account<'info, ProposalAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(project_idx: u8)]
pub struct RemoveProject<'info> {
    #[account(
        mut,
        seeds = [USER_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub user_profile: Box<Account<'info, UserProfile>>,

    #[account(
        mut,
        close = authority,
        seeds = [PROJECT_TAG, authority.key().as_ref(), &[project_idx].as_ref()],
        bump,
        has_one = authority,
    )]
    pub project_account: Box<Account<'info, ProjectAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn is_zero_account(account_info: &AccountInfo) -> bool {
    let account_data: &[u8] = &account_info.data.borrow();
    let len = account_data.len();
    let mut is_zero = true;
    for i in 0..len - 1 {
        if account_data[i] != 0 {
            is_zero = false;
        }
    }
    is_zero
}

pub fn bump(seeds: &[&[u8]], program_id: &Pubkey) -> u8 {
    let (_found_key, bump) = Pubkey::find_program_address(seeds, program_id);
    bump
}
