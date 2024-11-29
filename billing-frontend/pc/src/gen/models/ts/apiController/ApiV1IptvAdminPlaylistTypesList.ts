import type { PlaylistType } from "../PlaylistType"

export type ApiV1IptvAdminPlaylistTypesListQueryParams =
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

export type ApiV1IptvAdminPlaylistTypesListQueryResponse = {
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
  results: PlaylistType[]
}
export type ApiV1IptvAdminPlaylistTypesListQuery = {
  Response: ApiV1IptvAdminPlaylistTypesListQueryResponse
  QueryParams: ApiV1IptvAdminPlaylistTypesListQueryParams
}
