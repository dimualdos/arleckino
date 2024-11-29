export type PaymentSystemDetail = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  title: string
  /**
   * @type string | undefined uri
   */
  payment_url?: string | null
  /**
   * @type string | undefined uri
   */
  callback_url?: string | null
  /**
   * @type string | undefined uri
   */
  status_url?: string | null
  /**
   * @type string | undefined
   */
  login?: string | null
  /**
   * @type string | undefined
   */
  password?: string | null
  /**
   * @type boolean | undefined
   */
  is_disabled?: boolean
  /**
   * @type boolean | undefined
   */
  is_hidden?: boolean
  /**
   * @type string | undefined date-time
   */
  is_hidden_date?: Date
  /**
   * @type number | undefined decimal
   */
  bonus_percent?: number
  /**
   * @type string | undefined
   */
  settings?: string | null
}
