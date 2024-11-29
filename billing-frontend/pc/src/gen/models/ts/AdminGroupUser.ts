import type { UserShort } from "./UserShort"

export type AdminGroupUser = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  user?: UserShort
  /**
   * @type string | undefined date-time
   */
  readonly dt_create?: Date
  /**
   * @type integer
   */
  group: number
}
