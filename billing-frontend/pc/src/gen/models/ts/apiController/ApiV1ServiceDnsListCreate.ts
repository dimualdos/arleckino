import type { Dns } from "../Dns"

export type ApiV1ServiceDnsListCreate201 = Dns

export type ApiV1ServiceDnsListCreateMutationRequest = Omit<NonNullable<Dns>, "id" | "dns_full">

export type ApiV1ServiceDnsListCreateMutationResponse = Dns
export namespace ApiV1ServiceDnsListCreateMutation {
  export type Response = ApiV1ServiceDnsListCreateMutationResponse
  export type Request = ApiV1ServiceDnsListCreateMutationRequest
  export type Errors = ApiV1ServiceDnsListCreate201
}
