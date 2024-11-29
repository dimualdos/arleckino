import type { Dns } from "../Dns"

export type ApiV1ServiceDnsPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceDnsPartialUpdateMutationRequest = Omit<NonNullable<Dns>, "id" | "dns_full">

export type ApiV1ServiceDnsPartialUpdateMutationResponse = Dns
export namespace ApiV1ServiceDnsPartialUpdateMutation {
  export type Response = ApiV1ServiceDnsPartialUpdateMutationResponse
  export type Request = ApiV1ServiceDnsPartialUpdateMutationRequest
  export type PathParams = ApiV1ServiceDnsPartialUpdatePathParams
}
