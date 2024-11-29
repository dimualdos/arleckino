import { OnlyOneField } from "@/src/widgets/Personal/Main/types"

export type UserProfile = {
  /**
   * @type string | undefined
   */
  timezone?: string
  /**
   * @type boolean | undefined
   */
  is_system_events_notifications?: boolean
  /**
   * @type boolean | undefined
   */
  is_balance_notifications?: boolean
  /**
   * @type boolean | undefined
   */
  is_get_news_notifications?: boolean
  /**
   * @type boolean | undefined
   */
  is_notify_subscription_expiration?: boolean
  /**
   * @type boolean | undefined
   */
  is_referral_notifications?: boolean
  /**
   * @type boolean | undefined
   */
  is_subscribe_mail_list?: boolean
}