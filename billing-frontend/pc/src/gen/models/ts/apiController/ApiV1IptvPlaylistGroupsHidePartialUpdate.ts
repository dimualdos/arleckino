import type { HideChannelGroupOnPlaylist } from "../HideChannelGroupOnPlaylist"

export type ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams = {
  /**
   * @type string
   */
  playlist_pk: string
}

export namespace ApiV1IptvPlaylistGroupsHidePartialUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams
}

export type ApiV1IptvPlaylistGroupsHidePartialUpdatePathParamsAlt = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest = HideChannelGroupOnPlaylist

export type ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse = HideChannelGroupOnPlaylist
