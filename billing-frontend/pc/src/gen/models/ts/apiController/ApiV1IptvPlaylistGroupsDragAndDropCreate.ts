import type { PlaylistDragNDropGroup } from "../PlaylistDragNDropGroup"

export type ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  playlist_pk: string
}

export type ApiV1IptvPlaylistGroupsDragAndDropCreate201 = PlaylistDragNDropGroup

export type ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest = PlaylistDragNDropGroup

export type ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse = PlaylistDragNDropGroup
export namespace ApiV1IptvPlaylistGroupsDragAndDropCreateMutation {
  export type Response = ApiV1IptvPlaylistGroupsDragAndDropCreateMutationResponse
  export type Request = ApiV1IptvPlaylistGroupsDragAndDropCreateMutationRequest
  export type PathParams = ApiV1IptvPlaylistGroupsDragAndDropCreatePathParams
  export type Errors = ApiV1IptvPlaylistGroupsDragAndDropCreate201
}
