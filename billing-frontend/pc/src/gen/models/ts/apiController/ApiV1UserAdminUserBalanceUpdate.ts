import type { AdminUserBalanceChange } from "../AdminUserBalanceChange"

export type ApiV1UserAdminUserBalanceUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserBalanceUpdateMutationRequest = AdminUserBalanceChange

export type ApiV1UserAdminUserBalanceUpdateMutationResponse = AdminUserBalanceChange
export namespace ApiV1UserAdminUserBalanceUpdateMutation {
  export type Response = ApiV1UserAdminUserBalanceUpdateMutationResponse
  export type Request = ApiV1UserAdminUserBalanceUpdateMutationRequest
  export type PathParams = ApiV1UserAdminUserBalanceUpdatePathParams
}
