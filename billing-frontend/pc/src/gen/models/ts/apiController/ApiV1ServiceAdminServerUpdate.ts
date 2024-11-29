import type { Server } from "../Server"

export type ApiV1ServiceAdminServerUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminServerUpdateMutationRequest = Omit<NonNullable<Server>, "id" | "created_date" | "modified_date">

export type ApiV1ServiceAdminServerUpdateMutationResponse = Server
export namespace ApiV1ServiceAdminServerUpdateMutation {
  export type Response = ApiV1ServiceAdminServerUpdateMutationResponse
  export type Request = ApiV1ServiceAdminServerUpdateMutationRequest
  export type PathParams = ApiV1ServiceAdminServerUpdatePathParams
}
