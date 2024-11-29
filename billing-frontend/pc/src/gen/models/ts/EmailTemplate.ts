export type EmailTemplate = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  name: string
  /**
   * @type string | undefined
   */
  description?: string | null
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
