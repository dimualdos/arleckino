import type { FaqList } from "../FaqList"

export type ApiV1FaqListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      language?: string
      /**
       * @type string | undefined
       */
      tag?: string
      /**
       * @description A search term.
       * @type string | undefined
       */
      search?: string
      /**
       * @description Which field to use when ordering the results.
       * @type string | undefined
       */
      ordering?: string
    }
  | undefined

export type ApiV1FaqListListQueryResponse = FaqList[]
export type ApiV1FaqListListQuery = {
  Response: ApiV1FaqListListQueryResponse
  QueryParams: ApiV1FaqListListQueryParams
}
