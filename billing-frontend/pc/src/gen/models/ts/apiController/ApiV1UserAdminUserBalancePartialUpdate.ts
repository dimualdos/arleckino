import type { AdminUserBalanceChange } from "../AdminUserBalanceChange"

export type ApiV1UserAdminUserBalancePartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBalancePartialUpdateMutationRequest = AdminUserBalanceChange

export type ApiV1UserAdminUserBalancePartialUpdateMutationResponse = AdminUserBalanceChange
export namespace ApiV1UserAdminUserBalancePartialUpdateMutation {
  export type Response = ApiV1UserAdminUserBalancePartialUpdateMutationResponse
  export type Request = ApiV1UserAdminUserBalancePartialUpdateMutationRequest
  export type PathParams = ApiV1UserAdminUserBalancePartialUpdatePathParams
}
