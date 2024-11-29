import type { EmailTemplateContentImage } from "./EmailTemplateContentImage"

export type EmailTemplateContent = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type integer
   */
  email_template: number
  /**
   * @type integer
   */
  language: number
  /**
   * @type string | undefined
   */
  html_content?: string | null
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
  readonly images?: EmailTemplateContentImage[]
}
