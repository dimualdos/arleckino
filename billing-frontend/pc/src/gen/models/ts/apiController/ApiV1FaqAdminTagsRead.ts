import type { Tag } from "../Tag"

export type ApiV1FaqAdminTagsReadPathParams = {
  /**
   * @description A unique integer value identifying this tag.
   * @type integer
   */
  id: number
}

export type ApiV1FaqAdminTagsReadQueryResponse = Tag
export type ApiV1FaqAdminTagsReadQuery = {
  Response: ApiV1FaqAdminTagsReadQueryResponse
  PathParams: ApiV1FaqAdminTagsReadPathParams
}
