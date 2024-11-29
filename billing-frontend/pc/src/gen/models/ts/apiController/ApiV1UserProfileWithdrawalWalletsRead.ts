import type { WithdrawalWallet } from "../WithdrawalWallet"

export type ApiV1UserProfileWithdrawalWalletsReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserProfileWithdrawalWalletsReadQueryResponse = WithdrawalWallet
export type ApiV1UserProfileWithdrawalWalletsReadQuery = {
  Response: ApiV1UserProfileWithdrawalWalletsReadQueryResponse
  PathParams: ApiV1UserProfileWithdrawalWalletsReadPathParams
}
