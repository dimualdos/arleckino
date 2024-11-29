import type { UserPlaylist } from "../Playlist"

export type ApiV1IptvPlaylistListListQueryParams =
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

export type ApiV1IptvPlaylistListListQueryResponse = {
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
  results: UserPlaylist[]
}
export type ApiV1IptvPlaylistListListQuery = {
  Response: ApiV1IptvPlaylistListListQueryResponse
  QueryParams: ApiV1IptvPlaylistListListQueryParams
}
