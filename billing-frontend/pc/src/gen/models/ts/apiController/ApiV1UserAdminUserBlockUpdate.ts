import type { AdminUserBlock } from "../AdminUserBlock"

export type ApiV1UserAdminUserBlockUpdatePathParams = {
  /**
   * @type string
   */
  block_pk: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBlockUpdateMutationRequest = Omit<NonNullable<AdminUserBlock>, "id">

export type ApiV1UserAdminUserBlockUpdateMutationResponse = AdminUserBlock
export namespace ApiV1UserAdminUserBlockUpdateMutation {
  export type Response = ApiV1UserAdminUserBlockUpdateMutationResponse
  export type Request = ApiV1UserAdminUserBlockUpdateMutationRequest
  export type PathParams = ApiV1UserAdminUserBlockUpdatePathParams
}
