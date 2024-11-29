import type { PlaylistGroupChannelDragNDrop } from "../PlaylistGroupChannelDragNDrop"

export type ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams = {
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

export type ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate201 = PlaylistGroupChannelDragNDrop

export type ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest = PlaylistGroupChannelDragNDrop

export type ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse = PlaylistGroupChannelDragNDrop
export namespace ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutation {
  export type Response = ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsChannelsDragAndDropCreateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsChannelsDragAndDropCreatePathParams
  export type Errors = ApiV1IptvPlaylistGroupsChannelsDragAndDropCreate201
}
