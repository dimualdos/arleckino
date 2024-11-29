import { z } from "zod"

export const promocodeSchema = z.object({
  id: z.number().readonly().optional(),
  promocode_type: z.enum([`amount`, `percent`]).optional(),
  code: z.string().min(1).max(100),
  discount: z.number().optional(),
  max_transactions: z.number().min(0).max(2147483647).optional(),
  dt_create: z.string().datetime().optional(),
  is_active: z.boolean().optional(),
  dt_expire: z.string().datetime().nullish(),
  count_transactions: z.string().readonly().optional(),
})
