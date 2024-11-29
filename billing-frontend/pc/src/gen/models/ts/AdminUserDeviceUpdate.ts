export const AdminUserDeviceUpdateViewType = {
  portal: "portal",
  playlist: "playlist",
} as const
export type AdminUserDeviceUpdateViewType = (typeof AdminUserDeviceUpdateViewType)[keyof typeof AdminUserDeviceUpdateViewType]
export type AdminUserDeviceUpdate = {
  /**
   * @type integer
   */
  server_id: number | null
  /**
   * @type integer
   */
  playlist_id: number | null
  /**
   * @type string
   */
  ott_id: string
  /**
   * @type string
   */
  view_type: AdminUserDeviceUpdateViewType
  /**
   * @type integer
   */
  ministra_server: number | null
  /**
   * @type string
   */
  ministra_login: string | null
  /**
   * @type string
   */
  ministra_password: string | null
}
