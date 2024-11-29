import type { Domain } from "../Domain"

export type ApiV1ServiceAdminDomainPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminDomainPartialUpdateMutationRequest = Omit<NonNullable<Domain>, "id" | "created_date" | "modified_date">

export type ApiV1ServiceAdminDomainPartialUpdateMutationResponse = Domain
export namespace ApiV1ServiceAdminDomainPartialUpdateMutation {
  export type Response = ApiV1ServiceAdminDomainPartialUpdateMutationResponse
  export type Request = ApiV1ServiceAdminDomainPartialUpdateMutationRequest
  export type PathParams = ApiV1ServiceAdminDomainPartialUpdatePathParams
}
