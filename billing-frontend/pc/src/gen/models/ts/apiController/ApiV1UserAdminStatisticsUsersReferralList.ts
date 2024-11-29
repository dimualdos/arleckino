export type ApiV1UserAdminStatisticsUsersReferralListQueryParams =
  | {
      /**
       * @type string | undefined
       */
      d_begin?: string
      /**
       * @type string | undefined
       */
      d_end?: string
      /**
       * @description Which field to use when ordering the results.
       * @type string | undefined
       */
      ordering?: string
    }
  | undefined

export type ApiV1UserAdminStatisticsUsersReferralListQueryResponse = any | null
export type ApiV1UserAdminStatisticsUsersReferralListQuery = {
  Response: ApiV1UserAdminStatisticsUsersReferralListQueryResponse
  QueryParams: ApiV1UserAdminStatisticsUsersReferralListQueryParams
}
