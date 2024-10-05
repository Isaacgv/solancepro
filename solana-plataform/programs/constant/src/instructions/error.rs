use anchor_lang::prelude::*;

#[error_code]
pub enum ErrorCode {
    #[msg("Side A has not accepted the transaction.")]
    SideANotAccepted,
}