import type { FaqImage } from "./FaqImage"

export type FaqDetail = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
  /**
   * @type string
   */
  question_title: string
  /**
   * @type string | undefined
   */
  question_text?: string | null
  /**
   * @type string | undefined
   */
  readonly answers?: string
  /**
   * @type boolean | undefined
   */
  is_published?: boolean
  /**
   * @type array | undefined
   */
  readonly images?: FaqImage[]
  /**
   * @type integer | undefined
   */
  order?: number
  /**
   * @type integer | undefined
   */
  language?: number
  /**
   * @type array | undefined
   */
  readonly tags?: string[]
  /**
   * @type integer | undefined
   */
  number_of_views?: number
}
