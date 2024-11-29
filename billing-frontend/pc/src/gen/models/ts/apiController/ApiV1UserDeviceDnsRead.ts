import type { DeviceBindDns } from "../DeviceBindDns"

export type ApiV1UserDeviceDnsReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceDnsReadQueryResponse = DeviceBindDns
export type ApiV1UserDeviceDnsReadQuery = {
  Response: ApiV1UserDeviceDnsReadQueryResponse
  PathParams: ApiV1UserDeviceDnsReadPathParams
}
