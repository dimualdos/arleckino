import type { WithdrawalWalletCreate } from "../WithdrawalWalletCreate"

export type ApiV1UserProfileWithdrawalWalletsPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationRequest = WithdrawalWalletCreate

export type ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationResponse = WithdrawalWalletCreate
export namespace ApiV1UserProfileWithdrawalWalletsPartialUpdateMutation {
  export type Response = ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationResponse
  export type Request = ApiV1UserProfileWithdrawalWalletsPartialUpdateMutationRequest
  export type PathParams = ApiV1UserProfileWithdrawalWalletsPartialUpdatePathParams
}
