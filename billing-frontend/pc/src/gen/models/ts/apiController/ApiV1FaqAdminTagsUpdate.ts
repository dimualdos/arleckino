import type { TagCreate } from "../TagCreate"

export type ApiV1FaqAdminTagsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this tag.
   * @type integer
   */
  id: number
}

export type ApiV1FaqAdminTagsUpdateMutationRequest = Omit<NonNullable<TagCreate>, "id">

export type ApiV1FaqAdminTagsUpdateMutationResponse = TagCreate
export namespace ApiV1FaqAdminTagsUpdateMutation {
  export type Response = ApiV1FaqAdminTagsUpdateMutationResponse
  export type Request = ApiV1FaqAdminTagsUpdateMutationRequest
  export type PathParams = ApiV1FaqAdminTagsUpdatePathParams
}
