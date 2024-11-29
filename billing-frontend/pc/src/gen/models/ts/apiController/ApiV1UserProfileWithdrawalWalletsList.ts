import type { WithdrawalWallet } from "../WithdrawalWallet"

export type ApiV1UserProfileWithdrawalWalletsListQueryParams =
  | {
      /**
       * @description A page number within the paginated result set.
       * @type integer | undefined
       */
      page?: number
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
    }
  | undefined

export type ApiV1UserProfileWithdrawalWalletsListQueryResponse = {
  /**
   * @type integer
   */
  count: number
  /**
   * @type string,null | undefined uri
   */
  next?: string | null
  /**
   * @type string,null | undefined uri
   */
  previous?: string | null
  /**
   * @type array
   */
  results: WithdrawalWallet[]
}
export type ApiV1UserProfileWithdrawalWalletsListQuery = {
  Response: ApiV1UserProfileWithdrawalWalletsListQueryResponse
  QueryParams: ApiV1UserProfileWithdrawalWalletsListQueryParams
}
