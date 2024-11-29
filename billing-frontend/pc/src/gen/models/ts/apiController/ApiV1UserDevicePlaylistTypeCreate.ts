import type { DeviceBindPlaylistType } from "../DeviceBindPlaylistType"

export type ApiV1UserDevicePlaylistTypeCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDevicePlaylistTypeCreate201 = DeviceBindPlaylistType

export type ApiV1UserDevicePlaylistTypeCreateMutationRequest = DeviceBindPlaylistType

export type ApiV1UserDevicePlaylistTypeCreateMutationResponse = DeviceBindPlaylistType
export namespace ApiV1UserDevicePlaylistTypeCreateMutation {
  export type Response = ApiV1UserDevicePlaylistTypeCreateMutationResponse
  export type Request = ApiV1UserDevicePlaylistTypeCreateMutationRequest
  export type PathParams = ApiV1UserDevicePlaylistTypeCreatePathParams
  export type Errors = ApiV1UserDevicePlaylistTypeCreate201
}
