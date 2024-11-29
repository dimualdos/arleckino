import type { NewsDetail } from "../NewsDetail"

export type ApiV1NewsAdminUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1NewsAdminUpdateMutationRequest = Omit<NonNullable<NewsDetail>, "id" | "created_date" | "images">

export type ApiV1NewsAdminUpdateMutationResponse = NewsDetail
export namespace ApiV1NewsAdminUpdateMutation {
  export type Response = ApiV1NewsAdminUpdateMutationResponse
  export type Request = ApiV1NewsAdminUpdateMutationRequest
  export type PathParams = ApiV1NewsAdminUpdatePathParams
}
