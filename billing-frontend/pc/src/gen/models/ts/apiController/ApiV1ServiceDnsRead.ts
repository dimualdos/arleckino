import type { Dns } from "../Dns"

export type ApiV1ServiceDnsReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceDnsReadQueryResponse = Dns
export type ApiV1ServiceDnsReadQuery = {
  Response: ApiV1ServiceDnsReadQueryResponse
  PathParams: ApiV1ServiceDnsReadPathParams
}
