import type { MyPasswordResetConfirm } from "../MyPasswordResetConfirm"

export type ApiV1AuthPasswordChangeCreatePathParams = {
  /**
   * @type string
   */
  token: string
  /**
   * @type string
   */
  uidb64: string
}

export type ApiV1AuthPasswordChangeCreate201 = MyPasswordResetConfirm

export type ApiV1AuthPasswordChangeCreateMutationRequest = MyPasswordResetConfirm

export type ApiV1AuthPasswordChangeCreateMutationResponse = MyPasswordResetConfirm
export namespace ApiV1AuthPasswordChangeCreateMutation {
  export type Response = ApiV1AuthPasswordChangeCreateMutationResponse
  export type Request = ApiV1AuthPasswordChangeCreateMutationRequest
  export type PathParams = ApiV1AuthPasswordChangeCreatePathParams
  export type Errors = ApiV1AuthPasswordChangeCreate201
}
