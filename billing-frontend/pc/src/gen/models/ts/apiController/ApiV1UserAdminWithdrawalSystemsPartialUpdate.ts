import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this Withdrawal system.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest = Omit<NonNullable<WithdrawalSystem>, "id">

export type ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse = WithdrawalSystem
export namespace ApiV1UserAdminWithdrawalSystemsPartialUpdateMutation {
  export type Response = ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationResponse
  export type Request = ApiV1UserAdminWithdrawalSystemsPartialUpdateMutationRequest
  export type PathParams = ApiV1UserAdminWithdrawalSystemsPartialUpdatePathParams
}
