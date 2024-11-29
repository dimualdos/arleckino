import type { AdminUserBlock } from "../AdminUserBlock"

export type ApiV1UserAdminUserBlockPartialUpdatePathParams = {
  /**
   * @type string
   */
  block_pk: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBlockPartialUpdateMutationRequest = Omit<NonNullable<AdminUserBlock>, "id">

export type ApiV1UserAdminUserBlockPartialUpdateMutationResponse = AdminUserBlock
export namespace ApiV1UserAdminUserBlockPartialUpdateMutation {
  export type Response = ApiV1UserAdminUserBlockPartialUpdateMutationResponse
  export type Request = ApiV1UserAdminUserBlockPartialUpdateMutationRequest
  export type PathParams = ApiV1UserAdminUserBlockPartialUpdatePathParams
}
