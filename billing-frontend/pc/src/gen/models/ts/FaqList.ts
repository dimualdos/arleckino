export type FaqList = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  question_title: string
  /**
   * @type string | undefined
   */
  question_text?: string | null
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type integer | undefined
   */
  language?: number
  /**
   * @type boolean | undefined
   */
  is_published?: boolean
  /**
   * @type integer | undefined
   */
  order?: number
  /**
   * @type array | undefined
   */
  readonly tags?: number[]
  /**
   * @type integer | undefined
   */
  number_of_views?: number
}
