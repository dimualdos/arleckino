import type { UserBlock } from "../UserBlock"

export type ApiV1UserBlockListListQueryParams =
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

export type ApiV1UserBlockListListQueryResponse = {
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
  results: UserBlock[]
}
export type ApiV1UserBlockListListQuery = {
  Response: ApiV1UserBlockListListQueryResponse
  QueryParams: ApiV1UserBlockListListQueryParams
}
