import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserReferralsLinkClickThroughsListQueryResponse, ApiV1UserReferralsLinkClickThroughsListQueryParams } from "../../../models/ts/apiController/ApiV1UserReferralsLinkClickThroughsList"

/**
 * @description .
 * @summary Список переходов по реферальной ссылке пользователя
 * @link /api/v1/user/referrals/link-click-throughs */
export async function apiV1UserReferralsLinkClickThroughsList(
  params?: ApiV1UserReferralsLinkClickThroughsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsLinkClickThroughsListQueryResponse>> {
  const res = await client<ApiV1UserReferralsLinkClickThroughsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/referrals/link-click-throughs`,
    params,
    ...options,
  })
  return res
}
