export type HelpDeskCaseCreate = {
  /**
   * @type string
   */
  user_email: string
  /**
   * @type string
   */
  subject: string
  /**
   * @type string
   */
  content: string
  /**
   * @type string | undefined
   */
  content_html?: string | null
  /**
   * @type string | undefined
   */
  user_full_name?: string | null
  /**
   * @type string | undefined
   */
  channel?: string | null
  /**
   * @type object | undefined
   */
  custom_fields?: {
    [key: string]: string | null
  } | null
  /**
   * @type array | undefined
   */
  labels?: (string | null)[] | null
  /**
   * @type integer | undefined
   */
  language_id?: number | null
  /**
   * @type array | undefined
   */
  attachments?: (File | null)[] | null
}
