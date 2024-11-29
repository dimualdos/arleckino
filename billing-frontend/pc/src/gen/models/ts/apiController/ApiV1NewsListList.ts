import type { NewsList } from "../NewsList"

export type ApiV1NewsListListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      is_news_pages?: string
      /**
       * @type string | undefined
       */
      is_pushes?: string
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

export type ApiV1NewsListListQueryResponse = {
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
  results: NewsList[]
}
export type ApiV1NewsListListQuery = {
  Response: ApiV1NewsListListQueryResponse
  QueryParams: ApiV1NewsListListQueryParams
}
