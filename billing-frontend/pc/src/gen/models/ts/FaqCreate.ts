export type FaqCreate = {
  /**
   * @type string
   */
  question_title: string
  /**
   * @type string | undefined
   */
  question_text?: string | null
  /**
   * @type array
   */
  answers: string[]
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
   * @type string | undefined uuid
   */
  tmp_faq_id?: string | null
  /**
   * @type array
   */
  tags: number[]
}
