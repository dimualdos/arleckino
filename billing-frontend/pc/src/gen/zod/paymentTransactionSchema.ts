import { userShortSchema } from "./userShortSchema"
import { paymentSystemSchema } from "./paymentSystemSchema"
import { z } from "zod"

export const paymentTransactionSchema = z.object({
  id: z.number().readonly().optional(),
  dt_create: z.string().datetime().optional(),
  user: z.lazy(() => userShortSchema),
  amount: z.number().optional(),
  currency: z.string().min(1),
  transaction_type: z.enum([`replenishment`, `changing_admin`, `purchase`, `withdrawal`, `refund`, `referral`]).optional(),
  transaction_type_name: z.string().min(1),
  payment_system: z.lazy(() => paymentSystemSchema),
  description: z.string().max(255).nullish(),
  admin: z.lazy(() => userShortSchema),
  description_wallet: z.string().readonly().optional(),
  bonus_amount: z.number().optional(),
  bonus_type: z.string().max(255).nullish(),
})
