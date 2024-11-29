import type { EmailTemplateContentCreate } from "./EmailTemplateContentCreate"

export type EmailTemplateCreate = {
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
  contents: EmailTemplateContentCreate[]
}
