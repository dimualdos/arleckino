import type { UserPlaylist } from "../Playlist"

export type ApiV1UserAdminUserPlaylistsListPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserPlaylistsListQueryResponse = UserPlaylist[]
export type ApiV1UserAdminUserPlaylistsListQuery = {
  Response: ApiV1UserAdminUserPlaylistsListQueryResponse
  PathParams: ApiV1UserAdminUserPlaylistsListPathParams
}
