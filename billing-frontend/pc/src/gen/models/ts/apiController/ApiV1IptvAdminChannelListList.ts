import type { AdminChannel } from "../AdminChannel"

export type ApiV1IptvAdminChannelListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      group_id?: string
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

export type ApiV1IptvAdminChannelListListQueryResponse = {
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
  results: AdminChannel[]
}
export type ApiV1IptvAdminChannelListListQuery = {
  Response: ApiV1IptvAdminChannelListListQueryResponse
  QueryParams: ApiV1IptvAdminChannelListListQueryParams
}
