export const DeviceViewType = {
  portal: "portal",
  playlist: "playlist",
} as const
export type DeviceViewType = (typeof DeviceViewType)[keyof typeof DeviceViewType]
export const DeviceSubscriptionType = {
  active: "active",
  inactive: "inactive",
  ending: "ending",
} as const

type TSubscription = {
  auto_renew: boolean
  date_end: string
  date_start: string
  days_amount: number
  id: number
  is_active: boolean
  is_future: boolean
  is_premium: boolean
  is_premium_last: boolean
  is_test: boolean
}
export type DeviceSubscriptionType = (typeof DeviceSubscriptionType)[keyof typeof DeviceSubscriptionType]
export type Device = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type integer | undefined
   */
  readonly pk?: number
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
  dns?: number | null
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
  view_type?: DeviceViewType
  /**
   * @type string | undefined
   */
  subscription_type?: DeviceSubscriptionType
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
  ott_id?: string | null
  /**
   * @type integer | undefined
   */
  ministra_server?: number | null
  /**
   * @type string | undefined
   */
  ministra_login?: string | null
  /**
   * @type string | undefined
   */
  ministra_password?: string | null
  /**
   * @type string | undefined
   */
  readonly subscription?: TSubscription
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
  /**
   * @type string | undefined
   */
  readonly app_status?: string
}
