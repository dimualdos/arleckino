import type { TemplateContentImage } from "./TemplateContentImage"

export type TemplateContent = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type integer
   */
  template: number
  /**
   * @type integer
   */
  language: number
  /**
   * @type string | undefined
   */
  subject?: string | null
  /**
   * @type string | undefined
   */
  html_content?: string | null
  /**
   * @type string | undefined
   */
  text_content?: string | null
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
  /**
   * @type array | undefined
   */
  readonly images?: TemplateContentImage[]
}
