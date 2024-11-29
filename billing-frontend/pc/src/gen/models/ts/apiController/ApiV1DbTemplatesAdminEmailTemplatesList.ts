import type { EmailTemplate } from "../EmailTemplate"

export type ApiV1DbTemplatesAdminEmailTemplatesListQueryParams =
  | {
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

export type ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse = {
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
  results: EmailTemplate[]
}
export type ApiV1DbTemplatesAdminEmailTemplatesListQuery = {
  Response: ApiV1DbTemplatesAdminEmailTemplatesListQueryResponse
  QueryParams: ApiV1DbTemplatesAdminEmailTemplatesListQueryParams
}
