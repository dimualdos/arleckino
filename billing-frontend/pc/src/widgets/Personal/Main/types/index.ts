import { User } from "@/src/gen/models/ts/User"
import { UserProfile } from "@/src/gen/models/ts/UserProfile"

export type PersonalMainProps = Pick<
  User,
  "is_balance_notifications" | "is_get_news_notifications" | "is_notify_subscription_expiration" | "is_referral_notifications" | "is_subscribe_mail_list" | "is_system_events_notifications"
> & {
  userWalletRequisites: string
}

export interface PaymentProps {
  name: string
  email?: string
  active: boolean
}

export type UpdateUserProfileFieldProps = Omit<UserProfile, "timezone">
export type OnlyOneField<T> = {
  [K in keyof T]: Pick<T, K>
}[keyof T]
