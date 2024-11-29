import type { AdminUserSendEmail } from "../AdminUserSendEmail"

export type ApiV1UserAdminUserSendEmailCreatePathParams = {
  /**
   * @description A unique integer value identifying this Users.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminUserSendEmailCreate201 = AdminUserSendEmail

export type ApiV1UserAdminUserSendEmailCreateMutationRequest = AdminUserSendEmail

export type ApiV1UserAdminUserSendEmailCreateMutationResponse = AdminUserSendEmail
export namespace ApiV1UserAdminUserSendEmailCreateMutation {
  export type Response = ApiV1UserAdminUserSendEmailCreateMutationResponse
  export type Request = ApiV1UserAdminUserSendEmailCreateMutationRequest
  export type PathParams = ApiV1UserAdminUserSendEmailCreatePathParams
  export type Errors = ApiV1UserAdminUserSendEmailCreate201
}
