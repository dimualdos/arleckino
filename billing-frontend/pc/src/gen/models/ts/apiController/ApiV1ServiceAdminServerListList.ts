import type { Server } from "../Server"

export type ApiV1ServiceAdminServerListListQueryParams =
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

export type ApiV1ServiceAdminServerListListQueryResponse = {
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
  results: Server[]
}
export type ApiV1ServiceAdminServerListListQuery = {
  Response: ApiV1ServiceAdminServerListListQueryResponse
  QueryParams: ApiV1ServiceAdminServerListListQueryParams
}
