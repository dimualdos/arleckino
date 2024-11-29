import type { ActionGroup } from "./ActionGroup"

export type ActionType = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  readonly statuses?: string
  group: ActionGroup
  /**
   * @type string
   */
  title: string
  /**
   * @type string | undefined
   */
  readonly label?: string
}
