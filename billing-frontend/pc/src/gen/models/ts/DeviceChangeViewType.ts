export const DeviceChangeViewTypeViewType = {
  portal: "portal",
  playlist: "playlist",
} as const
export type DeviceChangeViewTypeViewType = (typeof DeviceChangeViewTypeViewType)[keyof typeof DeviceChangeViewTypeViewType]
export type DeviceChangeViewType = {
  /**
   * @type string
   */
  view_type: DeviceChangeViewTypeViewType
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
}
