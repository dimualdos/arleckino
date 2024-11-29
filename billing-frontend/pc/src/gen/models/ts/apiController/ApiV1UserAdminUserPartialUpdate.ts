import type { AdminUpdateUser } from "../AdminUpdateUser"

export type ApiV1UserAdminUserPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserPartialUpdateMutationRequest = AdminUpdateUser

export type ApiV1UserAdminUserPartialUpdateMutationResponse = AdminUpdateUser
export namespace ApiV1UserAdminUserPartialUpdateMutation {
  export type Response = ApiV1UserAdminUserPartialUpdateMutationResponse
  export type Request = ApiV1UserAdminUserPartialUpdateMutationRequest
  export type PathParams = ApiV1UserAdminUserPartialUpdatePathParams
}
