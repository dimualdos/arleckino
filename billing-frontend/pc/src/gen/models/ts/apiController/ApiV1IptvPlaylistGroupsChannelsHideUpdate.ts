import type { HideChannelOnPlaylistChannelGroup } from "../HideChannelOnPlaylistChannelGroup"
import type { HideChannelGroupOnPlaylist } from "../HideChannelGroupOnPlaylist"

export type ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams = {
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

export type ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest = HideChannelOnPlaylistChannelGroup

export type ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse = HideChannelOnPlaylistChannelGroup
export namespace ApiV1IptvPlaylistGroupsChannelsHideUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams
}

export type ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParamsAlt = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequestAlt = HideChannelGroupOnPlaylist

export type ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponseAlt = HideChannelGroupOnPlaylist
