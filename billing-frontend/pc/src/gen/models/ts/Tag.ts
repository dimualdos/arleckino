export type Tag = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  title: string
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
}
