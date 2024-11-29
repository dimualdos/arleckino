export type ReferralBalanceWithdraw = {
  /**
   * @type number
   */
  amount: number
  /**
   * @type number | undefined decimal
   */
  readonly balance?: number
  /**
   * @type number | undefined decimal
   */
  readonly referral_balance?: number
}
