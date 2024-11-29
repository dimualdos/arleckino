import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserReferralsListQueryResponse,
  ApiV1UserAdminUserReferralsListPathParams,
  ApiV1UserAdminUserReferralsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsList"

/**
 * @description .
 * @summary Список рефералов пользователя
 * @link /api/v1/user/admin/user/:id/referrals */
export async function apiV1UserAdminUserReferralsList(
  { id }: ApiV1UserAdminUserReferralsListPathParams,
  params?: ApiV1UserAdminUserReferralsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserReferralsListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserReferralsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/referrals`,
    params,
    ...options,
  })
  return res
}
