import { z } from "zod"

export const paymentTransactionReplenishmentSchema = z.object({
  payment_system_id: z.number(),
  amount: z.number(),
  policy_agreement: z.boolean().default(false).optional(),
  currency: z.string().min(1).default("usd").optional(),
  force: z.boolean().default(false).optional(),
})
