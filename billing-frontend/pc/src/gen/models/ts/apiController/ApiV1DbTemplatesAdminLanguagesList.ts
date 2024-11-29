import type { Language } from "../Language"

export type ApiV1DbTemplatesAdminLanguagesListQueryParams =
  | {
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

export type ApiV1DbTemplatesAdminLanguagesListQueryResponse = {
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
  results: Language[]
}
export type ApiV1DbTemplatesAdminLanguagesListQuery = {
  Response: ApiV1DbTemplatesAdminLanguagesListQueryResponse
  QueryParams: ApiV1DbTemplatesAdminLanguagesListQueryParams
}
