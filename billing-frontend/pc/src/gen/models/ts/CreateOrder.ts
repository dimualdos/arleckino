export type CreateOrder = {
  /**
   * @type array
   */
  device_ids: number[]
  /**
   * @type integer
   */
  days_amount: number
  /**
   * @type boolean
   */
  is_premium: boolean | null
  /**
   * @type boolean
   */
  is_auto_renew: boolean | null
  /**
   * @type integer | undefined
   */
  promocode_transaction_id?: number | null
  /**
   * @type boolean | undefined
   * @default false
   */
  force?: boolean
  /**
   * @type boolean | undefined
   * @default false
   */
  date_alignment?: boolean
}
