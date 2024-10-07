// biome-ignore lint/style/useImportType: <explanation>
import { AnchorProvider, IdlAccounts, Program } from '@coral-xyz/anchor'
// biome-ignore lint/style/useImportType: <explanation>
import { IDL, Platform } from './idl'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'

export const programId = new PublicKey(
  'dh9gZ5JyLwPYVtioHzx4YoauX51unfgtGRAGJup16j4'
)
