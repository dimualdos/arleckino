import type { FaqImage } from "../FaqImage"

export type ApiV1FaqAdminImageCreate201 = FaqImage

export type ApiV1FaqAdminImageCreateMutationRequest = Omit<NonNullable<FaqImage>, "id" | "image">

export type ApiV1FaqAdminImageCreateMutationResponse = FaqImage
export namespace ApiV1FaqAdminImageCreateMutation {
  export type Response = ApiV1FaqAdminImageCreateMutationResponse
  export type Request = ApiV1FaqAdminImageCreateMutationRequest
  export type Errors = ApiV1FaqAdminImageCreate201
}
