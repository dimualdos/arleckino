export type AdminMenuItem = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  code: string
  /**
   * @type string
   */
  name: string
  /**
   * @type boolean | undefined
   */
  is_hidden?: boolean
}
