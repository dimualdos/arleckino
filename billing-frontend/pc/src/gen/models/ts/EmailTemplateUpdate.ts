import type { EmailTemplateContentUpdate } from "./EmailTemplateContentUpdate"

export type EmailTemplateUpdate = {
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
   * @type array
   */
  contents: EmailTemplateContentUpdate[]
}
