import type { TagCreate } from "../TagCreate"

export type ApiV1FaqAdminTagsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this tag.
   * @type integer
   */
  id: number
}

export type ApiV1FaqAdminTagsPartialUpdateMutationRequest = Omit<NonNullable<TagCreate>, "id">

export type ApiV1FaqAdminTagsPartialUpdateMutationResponse = TagCreate
export namespace ApiV1FaqAdminTagsPartialUpdateMutation {
  export type Response = ApiV1FaqAdminTagsPartialUpdateMutationResponse
  export type Request = ApiV1FaqAdminTagsPartialUpdateMutationRequest
  export type PathParams = ApiV1FaqAdminTagsPartialUpdatePathParams
}
