import type { Channel } from "../Channel"

export type ApiV1IptvPlaylistChannelsListQueryResponse = { channels: Channel[]; playlists: PlaylistGroup[] }
export type ApiV1IptvPlaylistChannelsListQuery = {
  Response: ApiV1IptvPlaylistChannelsListQueryResponse
}

export type PlaylistGroup = {
  id: number
  groups: Group[]
}
export type Group = {
  id: number
  name: string
  ordering_id: number
  channels: SimpleChanel[]
}

export type SimpleChanel = {
  id: number
  ordering_id: number
}
