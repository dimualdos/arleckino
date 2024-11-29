import { z } from "zod"

export const promocodeCreateSchema = z.object({
  promocode_type: z.enum([`amount`, `percent`]).optional(),
  code: z.string().min(1).max(100),
  discount: z.number().optional(),
  max_transactions: z.number().min(0),
  dt_expire: z.string().datetime().nullish(),
})
