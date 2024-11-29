import type { WithdrawalWalletCreate } from "../WithdrawalWalletCreate"

export type ApiV1UserProfileWithdrawalWalletsUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest = WithdrawalWalletCreate

export type ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse = WithdrawalWalletCreate
export namespace ApiV1UserProfileWithdrawalWalletsUpdateMutation {
  export type Response = ApiV1UserProfileWithdrawalWalletsUpdateMutationResponse
  export type Request = ApiV1UserProfileWithdrawalWalletsUpdateMutationRequest
  export type PathParams = ApiV1UserProfileWithdrawalWalletsUpdatePathParams
}
