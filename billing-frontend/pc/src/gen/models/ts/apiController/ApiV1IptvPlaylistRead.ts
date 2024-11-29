import type { UserPlaylist } from "../Playlist"

export type ApiV1IptvPlaylistReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvPlaylistReadQueryResponse = UserPlaylist
export type ApiV1IptvPlaylistReadQuery = {
  Response: ApiV1IptvPlaylistReadQueryResponse
  PathParams: ApiV1IptvPlaylistReadPathParams
}
