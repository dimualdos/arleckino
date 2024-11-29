import type { AdminChannelGroup } from "../AdminChannelGroup"

export type ApiV1IptvAdminChannelGroupListListQueryParams =
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

export type ApiV1IptvAdminChannelGroupListListQueryResponse = {
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
  results: AdminChannelGroup[]
}
export type ApiV1IptvAdminChannelGroupListListQuery = {
  Response: ApiV1IptvAdminChannelGroupListListQueryResponse
  QueryParams: ApiV1IptvAdminChannelGroupListListQueryParams
}
