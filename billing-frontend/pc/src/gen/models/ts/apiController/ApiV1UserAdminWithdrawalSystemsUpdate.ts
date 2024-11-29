import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserAdminWithdrawalSystemsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Withdrawal system.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest = Omit<NonNullable<WithdrawalSystem>, "id">

export type ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse = WithdrawalSystem
export namespace ApiV1UserAdminWithdrawalSystemsUpdateMutation {
  export type Response = ApiV1UserAdminWithdrawalSystemsUpdateMutationResponse
  export type Request = ApiV1UserAdminWithdrawalSystemsUpdateMutationRequest
  export type PathParams = ApiV1UserAdminWithdrawalSystemsUpdatePathParams
}
