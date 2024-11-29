import type { PlaylistGroupChannelMove } from "../PlaylistGroupChannelMove"

export type ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams = {
  /**
   * @type string
   */
  group_pk: string
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest = PlaylistGroupChannelMove

export type ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse = PlaylistGroupChannelMove
export namespace ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsChannelsMovePartialUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsChannelsMovePartialUpdatePathParams
}
