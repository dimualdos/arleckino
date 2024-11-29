export type EmailTemplateContentCreate = {
  /**
   * @type integer
   */
  language: number
  /**
   * @type string | undefined
   */
  html_content?: string | null
  /**
   * @type string | undefined uuid
   */
  tmp_email_template_content_id?: string | null
}
