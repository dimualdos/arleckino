export const MinistraServerVersion = {
  "v5.3": "v5.3",
  "v5.6": "v5.6",
} as const
export type MinistraServerVersion = (typeof MinistraServerVersion)[keyof typeof MinistraServerVersion]
export type MinistraServer = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  readonly aura_url?: string
  /**
   * @type string | undefined
   */
  readonly mag_url?: string
  /**
   * @type string | undefined
   */
  readonly android_url?: string
  /**
   * @type string | undefined
   */
  readonly stalker_url?: string
  /**
   * @type string
   */
  title: string
  /**
   * @type string
   */
  dns: string
  /**
   * @type string
   */
  web_login: string
  /**
   * @type string
   */
  web_password: string
  /**
   * @type string | undefined
   */
  custom_api_url?: string
  /**
   * @type string | undefined
   */
  custom_api_secret?: string
  /**
   * @type string | undefined
   */
  version?: MinistraServerVersion
  /**
   * @type string | undefined date-time
   */
  readonly created_at?: Date
  /**
   * @type string | undefined date-time
   */
  updated_at?: Date
  /**
   * @type string | undefined
   */
  streaming_server_dns?: string
  /**
   * @type integer | undefined
   */
  streaming_server_archive_days?: number
  /**
   * @type string | undefined date-time
   */
  dt_last_synchronization?: Date | null
}
