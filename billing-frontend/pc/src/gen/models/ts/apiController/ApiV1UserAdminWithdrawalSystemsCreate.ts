import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserAdminWithdrawalSystemsCreate201 = WithdrawalSystem

export type ApiV1UserAdminWithdrawalSystemsCreateMutationRequest = Omit<NonNullable<WithdrawalSystem>, "id">

export type ApiV1UserAdminWithdrawalSystemsCreateMutationResponse = WithdrawalSystem
export namespace ApiV1UserAdminWithdrawalSystemsCreateMutation {
  export type Response = ApiV1UserAdminWithdrawalSystemsCreateMutationResponse
  export type Request = ApiV1UserAdminWithdrawalSystemsCreateMutationRequest
  export type Errors = ApiV1UserAdminWithdrawalSystemsCreate201
}
