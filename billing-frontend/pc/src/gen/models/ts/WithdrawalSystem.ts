export type WithdrawalSystem = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  user_identifier_name: string
  /**
   * @type string | undefined
   */
  user_identifier_regexp?: string | null
  /**
   * @type string | undefined
   */
  user_identifier_example?: string | null
  /**
   * @type boolean | undefined
   */
  is_disabled?: boolean
}
