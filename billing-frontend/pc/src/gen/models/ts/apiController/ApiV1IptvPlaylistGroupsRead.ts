import type { ChannelGroupAndChannels } from "../ChannelGroupAndChannels"

export type ApiV1IptvPlaylistGroupsReadPathParams = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsReadQueryResponse = ChannelGroupAndChannels
export type ApiV1IptvPlaylistGroupsReadQuery = {
  Response: ApiV1IptvPlaylistGroupsReadQueryResponse
  PathParams: ApiV1IptvPlaylistGroupsReadPathParams
}
