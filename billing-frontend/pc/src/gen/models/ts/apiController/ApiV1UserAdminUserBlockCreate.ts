import type { AdminUserBlock } from "../AdminUserBlock"

export type ApiV1UserAdminUserBlockCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBlockCreate201 = AdminUserBlock

export type ApiV1UserAdminUserBlockCreateMutationRequest = Omit<NonNullable<AdminUserBlock>, "id">

export type ApiV1UserAdminUserBlockCreateMutationResponse = AdminUserBlock
export namespace ApiV1UserAdminUserBlockCreateMutation {
  export type Response = ApiV1UserAdminUserBlockCreateMutationResponse
  export type Request = ApiV1UserAdminUserBlockCreateMutationRequest
  export type PathParams = ApiV1UserAdminUserBlockCreatePathParams
  export type Errors = ApiV1UserAdminUserBlockCreate201
}
