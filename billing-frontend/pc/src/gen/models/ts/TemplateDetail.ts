import type { TemplateContent } from "./TemplateContent"

export const TemplateDetailType = {
  email: "email",
  notification: "notification",
} as const
export type TemplateDetailType = (typeof TemplateDetailType)[keyof typeof TemplateDetailType]
export type TemplateDetail = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  type?: TemplateDetailType
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  template_name: string
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
  /**
   * @type string | undefined
   */
  template_aliases?: string | null
  /**
   * @type string | undefined
   */
  template_params?: string | null
  /**
   * @type integer | undefined
   */
  email_template?: number | null
  /**
   * @type array
   */
  contents: TemplateContent[]
}
