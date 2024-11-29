export type AdminUserDeviceAddSubscription = {
  /**
   * @type string date
   */
  date_end: Date
  /**
   * @type boolean | undefined
   * @default false
   */
  is_premium?: boolean
  /**
   * @type boolean | undefined
   * @default false
   */
  is_withdraw_from_user_balance?: boolean
}
