import type { DeviceBindServer } from "../DeviceBindServer"

export type ApiV1UserDeviceServerReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceServerReadQueryResponse = DeviceBindServer
export type ApiV1UserDeviceServerReadQuery = {
  Response: ApiV1UserDeviceServerReadQueryResponse
  PathParams: ApiV1UserDeviceServerReadPathParams
}
