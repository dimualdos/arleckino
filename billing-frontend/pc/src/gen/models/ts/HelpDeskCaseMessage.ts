import type { Dataclass } from "./Dataclass"

export type HelpDeskCaseMessage = {
  /**
   * @type string | undefined
   */
  readonly is_unread?: string
  /**
   * @type integer
   */
  message_id: number
  /**
   * @type integer
   */
  user_id: number
  /**
   * @type integer
   */
  staff_id: number
  /**
   * @type string
   */
  content: string
  /**
   * @type boolean
   */
  note: boolean
  /**
   * @type boolean
   */
  sent_via_rule: boolean
  /**
   * @type string date-time
   */
  dt_create: Date
  /**
   * @type array
   */
  attachments: Dataclass[]
  /**
   * @type string | undefined
   */
  content_html?: string | null
  /**
   * @type string | undefined
   */
  rating?: string | null
  /**
   * @type string | undefined
   */
  rating_comment?: string | null
  /**
   * @type integer | undefined
   */
  rated_staff_id?: number | null
}
