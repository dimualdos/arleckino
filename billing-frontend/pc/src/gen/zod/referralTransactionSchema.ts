import { z } from "zod"

export const referralTransactionSchema = z.object({
  id: z.number().readonly().optional(),
  username: z.string().min(1).optional(),
  email: z.string().email().min(1).optional(),
  currency: z.enum([`rub`, `eur`, `usd`]).optional(),
  amount: z.number().optional(),
  amount_replenishment: z.number().optional(),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
})
