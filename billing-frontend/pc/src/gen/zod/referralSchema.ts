import { z } from "zod"

export const referralSchema = z.object({
  id: z.number().readonly().optional(),
  username: z.string().min(1).optional(),
  email: z.string().email().min(1).optional(),
  dt_registration: z.string().datetime().readonly().optional(),
  is_verified: z.boolean().optional(),
  referer_url: z.string().max(255).nullish(),
  dt_update: z.string().datetime().optional(),
  payments_percent: z.number().optional(),
  first_replenishment_bonus_percent: z.number().optional(),
  dt_end_payments: z.string().datetime().nullish(),
})
