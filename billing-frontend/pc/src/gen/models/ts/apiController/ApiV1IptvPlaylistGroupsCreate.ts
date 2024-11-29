import type { ChannelGroup } from "../ChannelGroup"

export type ApiV1IptvPlaylistGroupsCreatePathParams = {
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsCreate201 = ChannelGroup

export type ApiV1IptvPlaylistGroupsCreateMutationRequest = Omit<NonNullable<ChannelGroup>, "id" | "channels_count" | "count_selected" | "created_date" | "modified_date">

export type ApiV1IptvPlaylistGroupsCreateMutationResponse = ChannelGroup
export namespace ApiV1IptvPlaylistGroupsCreateMutation {
  export type Response = ApiV1IptvPlaylistGroupsCreateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsCreateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsCreatePathParams
  export type Errors = ApiV1IptvPlaylistGroupsCreate201
}
