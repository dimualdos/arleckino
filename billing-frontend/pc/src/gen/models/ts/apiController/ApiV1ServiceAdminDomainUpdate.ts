import type { Domain } from "../Domain"

export type ApiV1ServiceAdminDomainUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminDomainUpdateMutationRequest = Omit<NonNullable<Domain>, "id" | "created_date" | "modified_date">

export type ApiV1ServiceAdminDomainUpdateMutationResponse = Domain
export namespace ApiV1ServiceAdminDomainUpdateMutation {
  export type Response = ApiV1ServiceAdminDomainUpdateMutationResponse
  export type Request = ApiV1ServiceAdminDomainUpdateMutationRequest
  export type PathParams = ApiV1ServiceAdminDomainUpdatePathParams
}
