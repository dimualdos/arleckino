import { withdrawalSystemShortSchema } from "./withdrawalSystemShortSchema"
import { userShortSchema } from "./userShortSchema"
import { z } from "zod"

export const withdrawalWalletSchema = z.object({
  id: z.number().readonly().optional(),
  withdrawal_system: z.lazy(() => withdrawalSystemShortSchema).optional(),
  user: z.lazy(() => userShortSchema).optional(),
  currency: z.enum([`rub`, `eur`, `usd`]).optional(),
  withdrawal_system_user_identifier: z.string().min(1).max(255),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  is_hidden: z.boolean().optional(),
  is_verified: z.boolean().optional(),
  dt_verified: z.string().datetime().nullish(),
})
