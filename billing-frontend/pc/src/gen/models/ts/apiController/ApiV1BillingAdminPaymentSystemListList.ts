import type { PaymentSystem } from "../PaymentSystem"

export type ApiV1BillingAdminPaymentSystemListListQueryParams =
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

export type ApiV1BillingAdminPaymentSystemListListQueryResponse = {
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
  results: PaymentSystem[]
}
export type ApiV1BillingAdminPaymentSystemListListQuery = {
  Response: ApiV1BillingAdminPaymentSystemListListQueryResponse
  QueryParams: ApiV1BillingAdminPaymentSystemListListQueryParams
}
