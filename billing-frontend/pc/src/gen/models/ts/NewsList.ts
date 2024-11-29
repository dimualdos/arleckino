export type NewsList = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  title: string
  /**
   * @type string | undefined
   */
  short_text?: string | null
  /**
   * @type string | undefined date
   */
  readonly created_date?: Date
}
