import type { DomainResponse } from "../DomainResponse"

export type ApiV1ServiceAdminDomainListCreate201 = DomainResponse

export type ApiV1ServiceAdminDomainListCreateMutationRequest = Omit<NonNullable<DomainResponse>, "id" | "dns_list">

export type ApiV1ServiceAdminDomainListCreateMutationResponse = DomainResponse
export namespace ApiV1ServiceAdminDomainListCreateMutation {
  export type Response = ApiV1ServiceAdminDomainListCreateMutationResponse
  export type Request = ApiV1ServiceAdminDomainListCreateMutationRequest
  export type Errors = ApiV1ServiceAdminDomainListCreate201
}
