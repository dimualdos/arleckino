import type { MinistraServer } from "../MinistraServer"

export type ApiV1ServiceMinistraListListQueryParams =
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

export type ApiV1ServiceMinistraListListQueryResponse = {
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
  results: MinistraServer[]
}
export type ApiV1ServiceMinistraListListQuery = {
  Response: ApiV1ServiceMinistraListListQueryResponse
  QueryParams: ApiV1ServiceMinistraListListQueryParams
}
