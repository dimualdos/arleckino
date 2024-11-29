export type PlaylistType = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  readonly url?: string
  /**
   * @type string | undefined
   */
  readonly download_url?: string
  /**
   * @type string | undefined
   */
  readonly epg_urls?: string
  /**
   * @type string | undefined
   */
  readonly epg_lite_urls?: string
  /**
   * @type string | undefined
   */
  readonly picon_urls?: string
  /**
   * @type string
   */
  name: string
  /**
   * @type string | undefined
   */
  format_name?: string | null
  /**
   * @type string | undefined
   */
  file_name?: string | null
  /**
   * @type boolean | undefined
   */
  is_archived?: boolean
  /**
   * @type boolean | undefined
   */
  is_mediateka?: boolean
  /**
   * @type string
   */
  description: string
  /**
   * @type string | undefined uri
   */
  description_url?: string | null
}
