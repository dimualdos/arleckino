import type { PlaylistBindDevice } from "../PlaylistBindDevice"

export type ApiV1IptvPlaylistBindDeviceCreatePathParams = {
  /**
   * @type string
   */
  device_pk: string
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvPlaylistBindDeviceCreate201 = PlaylistBindDevice

export type ApiV1IptvPlaylistBindDeviceCreateMutationRequest = Omit<NonNullable<PlaylistBindDevice>, "devices">

export type ApiV1IptvPlaylistBindDeviceCreateMutationResponse = PlaylistBindDevice
export namespace ApiV1IptvPlaylistBindDeviceCreateMutation {
  export type Response = ApiV1IptvPlaylistBindDeviceCreateMutationResponse
  export type Request = ApiV1IptvPlaylistBindDeviceCreateMutationRequest
  export type PathParams = ApiV1IptvPlaylistBindDeviceCreatePathParams
  export type Errors = ApiV1IptvPlaylistBindDeviceCreate201
}
