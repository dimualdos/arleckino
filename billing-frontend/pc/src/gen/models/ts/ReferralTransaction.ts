export const ReferralTransactionCurrency = {
  rub: "rub",
  eur: "eur",
  usd: "usd",
} as const
export type ReferralTransactionCurrency = (typeof ReferralTransactionCurrency)[keyof typeof ReferralTransactionCurrency]
export type ReferralTransaction = {
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
   * @type string | undefined
   */
  currency?: ReferralTransactionCurrency
  /**
   * @type number | undefined decimal
   */
  amount?: number
  /**
   * @type number | undefined decimal
   */
  amount_replenishment?: number
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
}
