import { z } from "zod"

export const userProfileSchema = z.object({
  timezone: z.string().optional(),
  is_system_events_notifications: z.boolean().optional(),
  is_balance_notifications: z.boolean().optional(),
  is_get_news_notifications: z.boolean().optional(),
  is_notify_subscription_expiration: z.boolean().optional(),
  is_referral_notifications: z.boolean().optional(),
  is_subscribe_mail_list: z.boolean().optional(),
})
