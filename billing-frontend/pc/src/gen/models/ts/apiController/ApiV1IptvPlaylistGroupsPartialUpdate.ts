import type { ChannelGroupUpdate } from "../ChannelGroupUpdate"

export type ApiV1IptvPlaylistGroupsPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest = ChannelGroupUpdate

export type ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse = ChannelGroupUpdate
export namespace ApiV1IptvPlaylistGroupsPartialUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsPartialUpdatePathParams
}
