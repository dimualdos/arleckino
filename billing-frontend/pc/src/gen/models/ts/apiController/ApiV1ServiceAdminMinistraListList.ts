import type { MinistraServer } from "../MinistraServer"

export type ApiV1ServiceAdminMinistraListListQueryParams =
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

export type ApiV1ServiceAdminMinistraListListQueryResponse = {
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
export type ApiV1ServiceAdminMinistraListListQuery = {
  Response: ApiV1ServiceAdminMinistraListListQueryResponse
  QueryParams: ApiV1ServiceAdminMinistraListListQueryParams
}
