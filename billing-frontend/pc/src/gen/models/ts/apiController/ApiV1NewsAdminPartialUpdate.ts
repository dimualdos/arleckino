import type { NewsDetail } from "../NewsDetail"

export type ApiV1NewsAdminPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1NewsAdminPartialUpdateMutationRequest = Omit<NonNullable<NewsDetail>, "id" | "created_date" | "images">

export type ApiV1NewsAdminPartialUpdateMutationResponse = NewsDetail
export namespace ApiV1NewsAdminPartialUpdateMutation {
  export type Response = ApiV1NewsAdminPartialUpdateMutationResponse
  export type Request = ApiV1NewsAdminPartialUpdateMutationRequest
  export type PathParams = ApiV1NewsAdminPartialUpdatePathParams
}
