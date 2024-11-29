export type HelpDeskCaseMessageCreate = {
  /**
   * @type string
   */
  content: string
  /**
   * @type string | undefined
   */
  content_html?: string | null
  /**
   * @type array | undefined
   */
  attachments?: (File | null)[] | null
}
