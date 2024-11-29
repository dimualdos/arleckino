import { userShortSchema } from "./userShortSchema"
import { z } from "zod"

export const adminGroupUserSchema = z.object({
  id: z.number().readonly().optional(),
  user: z.lazy(() => userShortSchema).optional(),
  dt_create: z.string().datetime().readonly().optional(),
  group: z.number(),
})
