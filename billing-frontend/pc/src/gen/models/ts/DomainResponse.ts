import type { Dns } from "./Dns"

export type DomainResponse = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  url: string
  /**
   * @type array | undefined
   */
  readonly dns_list?: Dns[]
}
