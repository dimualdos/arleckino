import type { FaqCreate } from "../FaqCreate"

export type ApiV1FaqAdminPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1FaqAdminPartialUpdateMutationRequest = FaqCreate

export type ApiV1FaqAdminPartialUpdateMutationResponse = FaqCreate
export namespace ApiV1FaqAdminPartialUpdateMutation {
  export type Response = ApiV1FaqAdminPartialUpdateMutationResponse
  export type Request = ApiV1FaqAdminPartialUpdateMutationRequest
  export type PathParams = ApiV1FaqAdminPartialUpdatePathParams
}
