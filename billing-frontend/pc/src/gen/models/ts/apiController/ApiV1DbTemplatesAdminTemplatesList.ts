import type { Template } from "../Template"

export type ApiV1DbTemplatesAdminTemplatesListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      type?: string
      /**
       * @type string | undefined
       */
      q?: string
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

export type ApiV1DbTemplatesAdminTemplatesListQueryResponse = {
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
  results: Template[]
}
export type ApiV1DbTemplatesAdminTemplatesListQuery = {
  Response: ApiV1DbTemplatesAdminTemplatesListQueryResponse
  QueryParams: ApiV1DbTemplatesAdminTemplatesListQueryParams
}
