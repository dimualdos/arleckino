export type HelpDeskCase = {
  /**
   * @type string | undefined
   */
  readonly is_unread?: string
  /**
   * @type integer
   */
  case_id: number
  /**
   * @type string
   */
  case_number: string
  /**
   * @type string
   */
  subject: string
  /**
   * @type integer
   */
  user_id: number
  /**
   * @type integer
   */
  staff_id: number
  /**
   * @type integer
   */
  group_id: number
  /**
   * @type string
   */
  status: string
  /**
   * @type string
   */
  priority: string
  /**
   * @type string
   */
  channel: string
  /**
   * @type string
   */
  recipient: string
  /**
   * @type boolean
   */
  deleted: boolean
  /**
   * @type boolean
   */
  spam: boolean
  /**
   * @type integer
   */
  parent_case_id: number
  /**
   * @type integer
   */
  language_id: number
  /**
   * @type string date-time
   */
  dt_create: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date | null
  /**
   * @type string | undefined date-time
   */
  dt_close?: Date | null
  /**
   * @type string | undefined date-time
   */
  dt_last_response?: Date | null
}
