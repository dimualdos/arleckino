export const UpdateDeviceSubscriptionType = {
  active: "active",
  inactive: "inactive",
  ending: "ending",
} as const
export type UpdateDeviceSubscriptionType = (typeof UpdateDeviceSubscriptionType)[keyof typeof UpdateDeviceSubscriptionType]
export type UpdateDevice = {
  /**
   * @type string | undefined
   */
  content?: string | null
  /**
   * @description Show when an entry was created.
   * @type string | undefined date-time
   */
  readonly created_date?: Date
  /**
   * @type string | undefined
   */
  description?: string
  /**
   * @description This entry is visible or unvisible for a client part or admin part.
   * @type boolean | undefined
   */
  is_active?: boolean
  /**
   * @type boolean | undefined
   */
  is_deleted?: boolean
  /**
   * @description Show when an entry was updated
   * @type string | undefined date-time
   */
  readonly modified_date?: Date
  /**
   * @type string | undefined
   * @default 'Устройство для просмотра'
   */
  name?: string
  /**
   * @type boolean | undefined
   */
  new_device?: boolean
  /**
   * @description We usualy order a model in a client and an admin part.
   * @type integer | undefined
   */
  order?: number
  /**
   * @type string | undefined date-time
   */
  purchase_date?: Date | null
  /**
   * @type boolean | undefined
   */
  renew_subscription?: boolean
  /**
   * @type boolean | undefined
   */
  selected?: boolean
  /**
   * @type integer | undefined
   */
  server?: number | null
  /**
   * @type integer | undefined
   */
  playlist?: number | null
  /**
   * @type string | undefined date-time
   */
  start_date?: Date | null
  /**
   * @type boolean | undefined
   */
  is_test_period?: boolean
  /**
   * @type string | undefined
   */
  subscription_type?: UpdateDeviceSubscriptionType
  /**
   * @type integer
   */
  user: number
  /**
   * @type boolean | undefined
   */
  vip?: boolean
  /**
   * @type string | undefined
   */
  readonly subscription?: string
  /**
   * @type integer | undefined
   */
  playlist_type?: number | null
  /**
   * @type string | undefined
   */
  app_pairing_code?: string | null
  /**
   * @type string | undefined
   */
  app_hwid?: string | null
}
