export type Dns = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type integer
   */
  user_id: number
  /**
   * @type integer
   */
  domain_id: number
  /**
   * @type integer
   */
  server_id: number
  /**
   * @type string
   */
  dns: string
  /**
   * @type string | undefined
   */
  readonly dns_full?: string
}
