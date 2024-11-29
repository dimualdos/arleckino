import type { UserPlaylist } from "../Playlist"

export type ApiV1IptvPlaylistPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvPlaylistPartialUpdateMutationRequest = Omit<NonNullable<UserPlaylist>, "id">

export type ApiV1IptvPlaylistPartialUpdateMutationResponse = UserPlaylist
export namespace ApiV1IptvPlaylistPartialUpdateMutation {
  export type Response = ApiV1IptvPlaylistPartialUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistPartialUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistPartialUpdatePathParams
}
