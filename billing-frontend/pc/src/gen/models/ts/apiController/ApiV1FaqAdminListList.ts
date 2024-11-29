import type { FaqList } from "../FaqList"

export type ApiV1FaqAdminListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      is_published?: string
      /**
       * @type string | undefined
       */
      language?: string
      /**
       * @description A search term.
       * @type string | undefined
       */
      search?: string
      /**
       * @description A page number within the paginated result set.
       * @type integer | undefined
       */
      page?: number
      /**
       * @description Number of results to return per page.
       * @type integer | undefined
       */
      limit?: number
    }
  | undefined

export type ApiV1FaqAdminListListQueryResponse = {
  /**
   * @type integer
   */
  count: number
  /**
   * @type string,null | undefined uri
   */
  next?: string | null
  /**
   * @type string,null | undefined uri
   */
  previous?: string | null
  /**
   * @type array
   */
  results: FaqList[]
}
export type ApiV1FaqAdminListListQuery = {
  Response: ApiV1FaqAdminListListQueryResponse
  QueryParams: ApiV1FaqAdminListListQueryParams
}
