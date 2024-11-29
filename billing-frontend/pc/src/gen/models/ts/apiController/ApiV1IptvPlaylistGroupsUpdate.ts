import type { ChannelGroupUpdate } from "../ChannelGroupUpdate"

export type ApiV1IptvPlaylistGroupsUpdatePathParams = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsUpdateMutationRequest = ChannelGroupUpdate

export type ApiV1IptvPlaylistGroupsUpdateMutationResponse = ChannelGroupUpdate
export namespace ApiV1IptvPlaylistGroupsUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsUpdatePathParams
}
