import { z } from "zod"

export const withdrawalTransactionUpdateSchema = z.object({
  amount: z.number(),
  withdrawal_wallet_id: z.number(),
  withdrawal_system_id: z.number(),
  withdrawal_system_user_identifier: z.string().min(1),
  currency: z.string().min(1).optional(),
})
