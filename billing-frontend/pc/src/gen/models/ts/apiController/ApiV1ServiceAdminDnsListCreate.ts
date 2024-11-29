import type { Dns } from "../Dns"

export type ApiV1ServiceAdminDnsListCreate201 = Dns

export type ApiV1ServiceAdminDnsListCreateMutationRequest = Omit<NonNullable<Dns>, "id" | "dns_full">

export type ApiV1ServiceAdminDnsListCreateMutationResponse = Dns
export namespace ApiV1ServiceAdminDnsListCreateMutation {
  export type Response = ApiV1ServiceAdminDnsListCreateMutationResponse
  export type Request = ApiV1ServiceAdminDnsListCreateMutationRequest
  export type Errors = ApiV1ServiceAdminDnsListCreate201
}
