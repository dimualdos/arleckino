export type AdminChannelGroup = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type integer | undefined
   */
  readonly channels_count?: number
  /**
   * @type integer | undefined
   */
  readonly count_selected?: number
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
   * @type integer | undefined
   */
  csv_group_id?: number | null
  /**
   * @type string
   */
  name: string
  /**
   * @type boolean | undefined
   */
  is_hidden?: boolean
  /**
   * @type number | undefined
   */
  ordering_id?: number
  /**
   * @type integer | undefined
   */
  playlist?: number | null
}
