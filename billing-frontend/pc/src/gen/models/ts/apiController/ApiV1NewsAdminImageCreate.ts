import type { NewsImage } from "../NewsImage"

export type ApiV1NewsAdminImageCreate201 = NewsImage

export type ApiV1NewsAdminImageCreateMutationRequest = Omit<NonNullable<NewsImage>, "id" | "image">

export type ApiV1NewsAdminImageCreateMutationResponse = NewsImage
export namespace ApiV1NewsAdminImageCreateMutation {
  export type Response = ApiV1NewsAdminImageCreateMutationResponse
  export type Request = ApiV1NewsAdminImageCreateMutationRequest
  export type Errors = ApiV1NewsAdminImageCreate201
}
