export type Language = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  readonly is_default?: string
  /**
   * @type string
   */
  code: string
  /**
   * @type string
   */
  name: string
  /**
   * @type boolean | undefined
   */
  is_active?: boolean
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
}
