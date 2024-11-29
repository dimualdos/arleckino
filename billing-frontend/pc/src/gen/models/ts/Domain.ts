export type Domain = {
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
   * @type string
   */
  name: string
  /**
   * @type string
   */
  url: string
}
