import type { Dns } from "../Dns"

export type ApiV1ServiceDnsUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceDnsUpdateMutationRequest = Omit<NonNullable<Dns>, "id" | "dns_full">

export type ApiV1ServiceDnsUpdateMutationResponse = Dns
export namespace ApiV1ServiceDnsUpdateMutation {
  export type Response = ApiV1ServiceDnsUpdateMutationResponse
  export type Request = ApiV1ServiceDnsUpdateMutationRequest
  export type PathParams = ApiV1ServiceDnsUpdatePathParams
}
