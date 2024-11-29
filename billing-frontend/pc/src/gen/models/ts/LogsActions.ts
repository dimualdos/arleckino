export type LogsActions = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined date-time
   */
  readonly created_at?: Date
  /**
   * @type integer
   */
  user_id: number
  /**
   * @type string | undefined
   */
  readonly message?: string
  /**
   * @type integer | undefined
   */
  action_type?: number | null
  /**
   * @type integer | undefined
   */
  action_status_type?: number | null
  /**
   * @type integer | undefined
   */
  group?: number
  /**
   * @type string | undefined
   */
  readonly user_ip?: string
}
