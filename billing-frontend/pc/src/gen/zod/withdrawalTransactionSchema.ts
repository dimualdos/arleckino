import { withdrawalSystemShortSchema } from "./withdrawalSystemShortSchema"
import { userShortSchema } from "./userShortSchema"
import { z } from "zod"

export const withdrawalTransactionSchema = z.object({
  id: z.number().readonly().optional(),
  withdrawal_system: z.lazy(() => withdrawalSystemShortSchema).optional(),
  user: z.lazy(() => userShortSchema).optional(),
  processed_user: z.lazy(() => userShortSchema).optional(),
  currency: z.enum([`rub`, `eur`, `usd`]).optional(),
  amount: z.number().optional(),
  withdrawal_system_user_identifier: z.string().min(1).max(255),
  dt_create: z.string().datetime().optional(),
  dt_update: z.string().datetime().optional(),
  is_transfered: z.boolean().nullish(),
  is_error: z.boolean().nullish(),
  error_message: z.string().nullish(),
  status: z.enum([`created`, `approved`, `rejected`]).optional(),
  withdrawal_wallet: z.number().nullish(),
})
