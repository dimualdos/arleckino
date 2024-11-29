import type { DeviceBindPlaylistType } from "../DeviceBindPlaylistType"

export type ApiV1UserDevicePlaylistTypeReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDevicePlaylistTypeReadQueryResponse = DeviceBindPlaylistType
export type ApiV1UserDevicePlaylistTypeReadQuery = {
  Response: ApiV1UserDevicePlaylistTypeReadQueryResponse
  PathParams: ApiV1UserDevicePlaylistTypeReadPathParams
}
