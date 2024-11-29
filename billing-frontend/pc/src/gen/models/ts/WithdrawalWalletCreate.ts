export type WithdrawalWalletCreate = {
  /**
   * @type integer
   */
  withdrawal_system_id: number
  /**
   * @type string
   */
  withdrawal_system_user_identifier: string
  /**
   * @type string | undefined
   */
  currency?: string
}
