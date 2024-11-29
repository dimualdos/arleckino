export type AdminUserBlock = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  reason: string
  /**
   * @type boolean | undefined
   */
  canceled?: boolean
  /**
   * @type string | undefined
   */
  cancel_reason?: string | null
  /**
   * @type string | undefined date
   */
  block_at?: Date
  /**
   * @type string | undefined date
   */
  expires_at?: Date | null
}
