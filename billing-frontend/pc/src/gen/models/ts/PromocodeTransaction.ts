import type { UserShort } from "./UserShort"

export type PromocodeTransaction = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  user: UserShort
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type number | undefined decimal
   */
  price?: number
  /**
   * @type number | undefined decimal
   */
  discount?: number
  /**
   * @type boolean | undefined
   */
  is_blocked?: boolean
  /**
   * @type string | undefined date-time
   */
  dt_activate?: Date | null
  /**
   * @type integer
   */
  promocode: number
  /**
   * @type integer | undefined
   */
  order?: number | null
}
