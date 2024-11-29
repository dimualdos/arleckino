import type { ChannelGroup } from "../ChannelGroup"

export type ApiV1IptvPlaylistGroupsListPathParams = {
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      is_hidden?: string
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

export type ApiV1IptvPlaylistGroupsListQueryResponse = {
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
  results: ChannelGroup[]
}
export type ApiV1IptvPlaylistGroupsListQuery = {
  Response: ApiV1IptvPlaylistGroupsListQueryResponse
  PathParams: ApiV1IptvPlaylistGroupsListPathParams
  QueryParams: ApiV1IptvPlaylistGroupsListQueryParams
}
