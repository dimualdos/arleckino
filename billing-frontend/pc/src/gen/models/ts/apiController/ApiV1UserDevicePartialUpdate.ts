import type { UpdateDevice } from "../UpdateDevice"

export type ApiV1UserDevicePartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserDevicePartialUpdateMutationRequest = Omit<NonNullable<UpdateDevice>, "created_date" | "modified_date" | "subscription">

export type ApiV1UserDevicePartialUpdateMutationResponse = UpdateDevice
export namespace ApiV1UserDevicePartialUpdateMutation {
  export type Response = ApiV1UserDevicePartialUpdateMutationResponse
  export type Request = ApiV1UserDevicePartialUpdateMutationRequest
  export type PathParams = ApiV1UserDevicePartialUpdatePathParams
}
