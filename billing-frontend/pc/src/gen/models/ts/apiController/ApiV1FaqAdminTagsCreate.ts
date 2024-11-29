import type { TagCreate } from "../TagCreate"

export type ApiV1FaqAdminTagsCreate201 = TagCreate

export type ApiV1FaqAdminTagsCreateMutationRequest = Omit<NonNullable<TagCreate>, "id">

export type ApiV1FaqAdminTagsCreateMutationResponse = TagCreate
export namespace ApiV1FaqAdminTagsCreateMutation {
  export type Response = ApiV1FaqAdminTagsCreateMutationResponse
  export type Request = ApiV1FaqAdminTagsCreateMutationRequest
  export type Errors = ApiV1FaqAdminTagsCreate201
}
