export const UserServerKind = {
  portal: "portal",
  playlist: "playlist",
} as const
export type UserServerKind = (typeof UserServerKind)[keyof typeof UserServerKind]
export type UserServer = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @description We usualy order a model in a client and an admin part.
   * @type integer | undefined
   */
  order?: number
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
   * @description Show when an entry was created.
   * @type string | undefined date-time
   */
  readonly created_date?: Date
  /**
   * @description Show when an entry was updated
   * @type string | undefined date-time
   */
  readonly modified_date?: Date
  /**
   * @type string | undefined
   */
  dns?: string
  /**
   * @description Playlist or Portal
   * @type string | undefined
   */
  kind?: UserServerKind
  /**
   * @type boolean | undefined
   */
  manual_disable_sale?: boolean
  /**
   * @type boolean | undefined
   */
  mbfs?: boolean
  /**
   * @type integer | undefined
   */
  archive_days?: number
  /**
   * @type string | undefined
   */
  speedtest_download?: string
  /**
   * @type string | undefined
   */
  speedtest_ping?: string
  /**
   * @type string | undefined
   */
  speedtest_dns?: string
  /**
   * @type boolean | undefined
   */
  is_virtual?: boolean
}
