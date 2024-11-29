import { z } from "zod"

export const adminUserDeviceAddSubscriptionSchema = z.object({
  date_end: z.string(),
  is_premium: z.boolean().default(false).optional(),
  is_withdraw_from_user_balance: z.boolean().default(false).optional(),
})
