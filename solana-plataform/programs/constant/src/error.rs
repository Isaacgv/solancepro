use anchor_lang::prelude::*;

#[error_code]
pub enum ProjectError {
    #[msg("You are not authorized to perform this action.")]
    Unauthorized,
    #[msg("Not allowed")]
    NotAllowed,
    #[msg("Math operation overflow")]
    MathOverflow,
    #[msg("Already marked")]
    AlreadyMarked,
    #[msg("Executing project")]
    Executing,
    #[msg("Side A has not accepted the transaction.")]
    SideANotAccepted,
 
}
