export type TemplateContentTestSendingEmail = {
  /**
   * @type integer
   */
  email_template_id: number
  /**
   * @type integer
   */
  language_id: number
  /**
   * @type string
   */
  subject: string
  /**
   * @type string
   */
  html_content: string | null
  /**
   * @type string
   */
  text_content: string | null
  /**
   * @type object
   */
  template_context: {
    [key: string]: string | null
  } | null
  /**
   * @type string email
   */
  email: string
}
