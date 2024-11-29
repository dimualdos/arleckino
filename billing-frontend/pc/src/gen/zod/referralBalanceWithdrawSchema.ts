import { z } from "zod"

export const referralBalanceWithdrawSchema = z.object({ amount: z.number(), balance: z.number().readonly().optional(), referral_balance: z.number().readonly().optional() })
