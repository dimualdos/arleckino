import type { Server } from "../Server"

export type ApiV1ServiceAdminServerPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminServerPartialUpdateMutationRequest = Omit<NonNullable<Server>, "id" | "created_date" | "modified_date">

export type ApiV1ServiceAdminServerPartialUpdateMutationResponse = Server
export namespace ApiV1ServiceAdminServerPartialUpdateMutation {
  export type Response = ApiV1ServiceAdminServerPartialUpdateMutationResponse
  export type Request = ApiV1ServiceAdminServerPartialUpdateMutationRequest
  export type PathParams = ApiV1ServiceAdminServerPartialUpdatePathParams
}
