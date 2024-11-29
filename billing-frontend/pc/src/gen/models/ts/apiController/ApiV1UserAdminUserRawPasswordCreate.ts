import type { AdminUserRawPassword } from "../AdminUserRawPassword"

export type ApiV1UserAdminUserRawPasswordCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserRawPasswordCreate201 = AdminUserRawPassword

export type ApiV1UserAdminUserRawPasswordCreateMutationRequest = AdminUserRawPassword

export type ApiV1UserAdminUserRawPasswordCreateMutationResponse = AdminUserRawPassword
export namespace ApiV1UserAdminUserRawPasswordCreateMutation {
  export type Response = ApiV1UserAdminUserRawPasswordCreateMutationResponse
  export type Request = ApiV1UserAdminUserRawPasswordCreateMutationRequest
  export type PathParams = ApiV1UserAdminUserRawPasswordCreatePathParams
  export type Errors = ApiV1UserAdminUserRawPasswordCreate201
}
