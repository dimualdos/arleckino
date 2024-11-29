export type PaymentTransactionAdminReplenishment = {
  /**
   * @type integer
   */
  user_id: number
  /**
   * @type integer
   */
  payment_system_id: number
  /**
   * @type number decimal
   */
  amount: number
  /**
   * @type boolean
   */
  is_used_bonuses: boolean
}
