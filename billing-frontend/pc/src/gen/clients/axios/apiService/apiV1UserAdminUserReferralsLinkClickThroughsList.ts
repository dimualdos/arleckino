import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse,
  ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams,
  ApiV1UserAdminUserReferralsLinkClickThroughsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsLinkClickThroughsList"

/**
 * @description .
 * @summary Список переходов по реферальной ссылке пользователя
 * @link /api/v1/user/admin/user/:id/referrals/link-click-throughs */
export async function apiV1UserAdminUserReferralsLinkClickThroughsList(
  { id }: ApiV1UserAdminUserReferralsLinkClickThroughsListPathParams,
  params?: ApiV1UserAdminUserReferralsLinkClickThroughsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserReferralsLinkClickThroughsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/referrals/link-click-throughs`,
    params,
    ...options,
  })
  return res
}
