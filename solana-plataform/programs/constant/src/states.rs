use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct UserProfile {
    pub authority: Pubkey,
    pub last_project: u8,
    pub project_count: u8,
    pub last_proposal: u8,
    pub proposal_count: u8,
}

#[account]
#[derive(Default)]
pub struct ProjectAccount {
    pub authority: Pubkey,
    pub idx: u8,
    pub title: String,
    pub description: String,
    pub features: String,
    pub deliverables: String,
    pub budget: u8,
    pub marked: bool,
    pub status: u8,
}

#[account]
#[derive(Default)]
pub struct ProposalAccount {
    pub authority: Pubkey,
    pub idx: u8,
    pub project_idx: u8,
    pub description: String,
    pub budget: u8,
    pub accepted: u8,
}

#[account]
pub struct Escrow {
    pub side_a: Pubkey,
    pub side_b: Pubkey,
    pub a_to_b_amount: u64,
    pub b_to_a_amount: u64,
    pub a_to_b_mint: Pubkey,
    pub b_to_a_mint: Pubkey,
    pub side_a_accepted: bool,
    pub bump: u8,
    pub escrow_token_bump: u8,
}

impl Escrow {
    pub const LEN: usize = 32 + 32 + 8 + 8 + 32 + 32 + 1 + 1;
}
