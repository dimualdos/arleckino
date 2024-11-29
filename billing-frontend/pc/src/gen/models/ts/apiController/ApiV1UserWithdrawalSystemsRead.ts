import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserWithdrawalSystemsReadPathParams = {
  /**
   * @description A unique integer value identifying this Withdrawal system.
   * @type integer
   */
  id: number
}

export type ApiV1UserWithdrawalSystemsReadQueryResponse = WithdrawalSystem
export type ApiV1UserWithdrawalSystemsReadQuery = {
  Response: ApiV1UserWithdrawalSystemsReadQueryResponse
  PathParams: ApiV1UserWithdrawalSystemsReadPathParams
}
