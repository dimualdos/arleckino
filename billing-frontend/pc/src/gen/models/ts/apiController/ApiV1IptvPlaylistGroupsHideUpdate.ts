import type { HideChannelGroupOnPlaylist } from "../HideChannelGroupOnPlaylist"

export type ApiV1IptvPlaylistGroupsHideUpdatePathParams = {
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsHideUpdatePathParamsAlt = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsHideUpdateMutationRequest = HideChannelGroupOnPlaylist

export type ApiV1IptvPlaylistGroupsHideUpdateMutationResponse = HideChannelGroupOnPlaylist
export namespace ApiV1IptvPlaylistGroupsHideUpdateMutation {
  export type Response = ApiV1IptvPlaylistGroupsHideUpdateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsHideUpdateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsHideUpdatePathParams
  export type PathParamsAlt = ApiV1IptvPlaylistGroupsHideUpdatePathParamsAlt
}
