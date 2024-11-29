import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserReferralsListQueryResponse, ApiV1UserReferralsListQueryParams } from "../../../models/ts/apiController/ApiV1UserReferralsList"

/**
 * @description .
 * @summary Список рефералов пользователя
 * @link /api/v1/user/referrals/ */
export async function apiV1UserReferralsList(
  params?: ApiV1UserReferralsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsListQueryResponse>> {
  const res = await client<ApiV1UserReferralsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/referrals/`,
    params,
    ...options,
  })
  return res
}
