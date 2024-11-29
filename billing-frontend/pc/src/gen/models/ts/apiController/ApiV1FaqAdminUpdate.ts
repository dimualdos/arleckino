import type { FaqCreate } from "../FaqCreate"

export type ApiV1FaqAdminUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1FaqAdminUpdateMutationRequest = FaqCreate

export type ApiV1FaqAdminUpdateMutationResponse = FaqCreate
export namespace ApiV1FaqAdminUpdateMutation {
  export type Response = ApiV1FaqAdminUpdateMutationResponse
  export type Request = ApiV1FaqAdminUpdateMutationRequest
  export type PathParams = ApiV1FaqAdminUpdatePathParams
}
