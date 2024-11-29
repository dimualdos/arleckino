export type PaymentTransactionReplenishment = {
  /**
   * @type integer
   */
  payment_system_id: number
  /**
   * @type number decimal
   */
  amount: number
  /**
   * @type boolean | undefined
   * @default false
   */
  policy_agreement?: boolean
  /**
   * @type string | undefined
   * @default 'usd'
   */
  currency?: string
  /**
   * @type boolean | undefined
   * @default false
   */
  force?: boolean
}
