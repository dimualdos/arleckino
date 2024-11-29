import type { ReferralStatistics } from "../ReferralStatistics"

export type ApiV1UserAdminUserReferralsBalanceReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1UserAdminUserReferralsBalanceReadQueryResponse = ReferralStatistics
export type ApiV1UserAdminUserReferralsBalanceReadQuery = {
  Response: ApiV1UserAdminUserReferralsBalanceReadQueryResponse
  PathParams: ApiV1UserAdminUserReferralsBalanceReadPathParams
}
