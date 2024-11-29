import type { DeviceBindDns } from "../DeviceBindDns"

export type ApiV1UserDeviceDnsCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceDnsCreate201 = DeviceBindDns

export type ApiV1UserDeviceDnsCreateMutationRequest = DeviceBindDns

export type ApiV1UserDeviceDnsCreateMutationResponse = DeviceBindDns
export namespace ApiV1UserDeviceDnsCreateMutation {
  export type Response = ApiV1UserDeviceDnsCreateMutationResponse
  export type Request = ApiV1UserDeviceDnsCreateMutationRequest
  export type PathParams = ApiV1UserDeviceDnsCreatePathParams
  export type Errors = ApiV1UserDeviceDnsCreate201
}
