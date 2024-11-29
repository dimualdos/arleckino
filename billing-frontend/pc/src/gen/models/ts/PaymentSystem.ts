export type PaymentSystem = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  title: string
  /**
   * @type boolean | undefined
   */
  is_disabled?: boolean
  /**
   * @type boolean | undefined
   */
  is_hidden?: boolean
  /**
   * @type number | undefined decimal
   */
  bonus_percent?: number
}
