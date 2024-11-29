import type { CreatePlaylist } from "../CreatePlaylist"

export type ApiV1IptvPlaylistListCreate201 = CreatePlaylist

export type ApiV1IptvPlaylistListCreateMutationRequest = Omit<NonNullable<CreatePlaylist>, "id">

export type ApiV1IptvPlaylistListCreateMutationResponse = CreatePlaylist
export namespace ApiV1IptvPlaylistListCreateMutation {
  export type Response = ApiV1IptvPlaylistListCreateMutationResponse
  export type Request = ApiV1IptvPlaylistListCreateMutationRequest
  export type Errors = ApiV1IptvPlaylistListCreate201
}
