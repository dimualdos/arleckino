export const ReferralLinkClickThroughStatus = {
  transition: "transition",
  registration: "registration",
} as const
export type ReferralLinkClickThroughStatus = (typeof ReferralLinkClickThroughStatus)[keyof typeof ReferralLinkClickThroughStatus]
export type ReferralLinkClickThrough = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  readonly username?: string
  /**
   * @type string | undefined
   */
  readonly email?: string
  /**
   * @type string | undefined
   */
  status?: ReferralLinkClickThroughStatus
  /**
   * @type string
   */
  referer_url: string
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
}
