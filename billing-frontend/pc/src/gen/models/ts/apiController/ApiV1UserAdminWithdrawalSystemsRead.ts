import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserAdminWithdrawalSystemsReadPathParams = {
  /**
   * @description A unique integer value identifying this Withdrawal system.
   * @type integer
   */
  id: number
}

export type ApiV1UserAdminWithdrawalSystemsReadQueryResponse = WithdrawalSystem
export type ApiV1UserAdminWithdrawalSystemsReadQuery = {
  Response: ApiV1UserAdminWithdrawalSystemsReadQueryResponse
  PathParams: ApiV1UserAdminWithdrawalSystemsReadPathParams
}
