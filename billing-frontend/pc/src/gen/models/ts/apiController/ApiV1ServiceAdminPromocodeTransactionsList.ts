import type { PromocodeTransaction } from "../PromocodeTransaction"

export type ApiV1ServiceAdminPromocodeTransactionsListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1ServiceAdminPromocodeTransactionsListQueryParams =
  | {
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
      /**
       * @description The initial index from which to return the results.
       * @type integer | undefined
       */
      offset?: number
    }
  | undefined

export type ApiV1ServiceAdminPromocodeTransactionsListQueryResponse = {
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
  results: PromocodeTransaction[]
}
export type ApiV1ServiceAdminPromocodeTransactionsListQuery = {
  Response: ApiV1ServiceAdminPromocodeTransactionsListQueryResponse
  PathParams: ApiV1ServiceAdminPromocodeTransactionsListPathParams
  QueryParams: ApiV1ServiceAdminPromocodeTransactionsListQueryParams
}
