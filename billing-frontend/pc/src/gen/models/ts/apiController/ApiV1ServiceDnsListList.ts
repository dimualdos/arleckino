import type { Dns } from "../Dns"

export type ApiV1ServiceDnsListListQueryParams =
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

export type ApiV1ServiceDnsListListQueryResponse = {
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
  results: Dns[]
}
export type ApiV1ServiceDnsListListQuery = {
  Response: ApiV1ServiceDnsListListQueryResponse
  QueryParams: ApiV1ServiceDnsListListQueryParams
}
