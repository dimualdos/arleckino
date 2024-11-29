import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserWithdrawalSystemsListQueryParams =
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

export type ApiV1UserWithdrawalSystemsListQueryResponse = {
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
  results: WithdrawalSystem[]
}
export type ApiV1UserWithdrawalSystemsListQuery = {
  Response: ApiV1UserWithdrawalSystemsListQueryResponse
  QueryParams: ApiV1UserWithdrawalSystemsListQueryParams
}
