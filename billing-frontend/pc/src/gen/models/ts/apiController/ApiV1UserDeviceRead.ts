import type { Device } from "../Device"

export type ApiV1UserDeviceReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceReadQueryResponse = Device
export type ApiV1UserDeviceReadQuery = {
  Response: ApiV1UserDeviceReadQueryResponse
  PathParams: ApiV1UserDeviceReadPathParams
}
