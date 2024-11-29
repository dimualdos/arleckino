import type { UserPlaylist } from "../Playlist"

export type ApiV1IptvPlaylistUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvPlaylistUpdateMutationRequest = Omit<NonNullable<UserPlaylist>, "id">

export type ApiV1IptvPlaylistUpdateMutationResponse = UserPlaylist
export namespace ApiV1IptvPlaylistUpdateMutation {
  export type Response = ApiV1IptvPlaylistUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistUpdatePathParams
}
