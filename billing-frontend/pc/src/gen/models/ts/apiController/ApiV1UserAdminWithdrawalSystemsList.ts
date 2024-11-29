import type { WithdrawalSystem } from "../WithdrawalSystem"

export type ApiV1UserAdminWithdrawalSystemsListQueryParams =
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

export type ApiV1UserAdminWithdrawalSystemsListQueryResponse = {
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
export type ApiV1UserAdminWithdrawalSystemsListQuery = {
  Response: ApiV1UserAdminWithdrawalSystemsListQueryResponse
  QueryParams: ApiV1UserAdminWithdrawalSystemsListQueryParams
}
