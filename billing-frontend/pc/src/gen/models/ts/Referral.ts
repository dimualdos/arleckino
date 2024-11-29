export type Referral = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  username?: string
  /**
   * @type string | undefined
   */
  email?: string
  /**
   * @type string | undefined date-time
   */
  readonly dt_registration?: Date
  /**
   * @type boolean | undefined
   */
  is_verified?: boolean
  /**
   * @type string | undefined
   */
  referer_url?: string | null
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
  /**
   * @type number | undefined decimal
   */
  payments_percent?: number
  /**
   * @type number | undefined decimal
   */
  first_replenishment_bonus_percent?: number
  /**
   * @type string | undefined date-time
   */
  dt_end_payments?: Date | null
}
