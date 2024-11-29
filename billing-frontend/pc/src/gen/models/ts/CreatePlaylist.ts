export type CreatePlaylist = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  title: string
  /**
   * @type boolean | undefined
   */
  is_default?: boolean
  /**
   * @type boolean | undefined
   * @default false
   */
  is_hidden?: boolean
}
