import type { PlaylistOs } from "../PlaylistOs"

export type ApiV1IptvPlaylistOsListQueryParams =
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

export type ApiV1IptvPlaylistOsListQueryResponse = {
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
  results: PlaylistOs[]
}
export type ApiV1IptvPlaylistOsListQuery = {
  Response: ApiV1IptvPlaylistOsListQueryResponse
  QueryParams: ApiV1IptvPlaylistOsListQueryParams
}
