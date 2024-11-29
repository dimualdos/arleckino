import type { PlaylistGroupChannelMove } from "../PlaylistGroupChannelMove"

export type ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams = {
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

export type ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest = PlaylistGroupChannelMove

export type ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse = PlaylistGroupChannelMove
export namespace ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsChannelsMoveUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsChannelsMoveUpdatePathParams
}
