import type { UpdateDevice } from "../UpdateDevice"

export type ApiV1UserDeviceUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDeviceUpdateMutationRequest = Omit<NonNullable<UpdateDevice>, "created_date" | "modified_date" | "subscription">

export type ApiV1UserDeviceUpdateMutationResponse = UpdateDevice
export namespace ApiV1UserDeviceUpdateMutation {
  export type Response = ApiV1UserDeviceUpdateMutationResponse
  export type Request = ApiV1UserDeviceUpdateMutationRequest
  export type PathParams = ApiV1UserDeviceUpdatePathParams
}
