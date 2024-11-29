import { userShortSchema } from "./userShortSchema"
import { z } from "zod"

export const promocodeTransactionSchema = z.object({
  id: z.number().readonly().optional(),
  user: z.lazy(() => userShortSchema),
  dt_create: z.string().datetime().optional(),
  price: z.number().optional(),
  discount: z.number().optional(),
  is_blocked: z.boolean().optional(),
  dt_activate: z.string().datetime().nullish(),
  promocode: z.number(),
  order: z.number().nullish(),
})
