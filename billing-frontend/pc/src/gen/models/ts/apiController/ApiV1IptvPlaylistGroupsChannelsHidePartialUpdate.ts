import type { HideChannelOnPlaylistChannelGroup } from "../HideChannelOnPlaylistChannelGroup"
import type { HideChannelGroupOnPlaylist } from "../HideChannelGroupOnPlaylist"

export type ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams = {
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

export type ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse = HideChannelOnPlaylistChannelGroup
export namespace ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams
}

export type ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParamsAlt = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest = HideChannelGroupOnPlaylist
