import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminUserReferralsBalanceReadQueryResponse, ApiV1UserAdminUserReferralsBalanceReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsBalanceRead"

/**
 * @description .
 * @summary Баланс внутреннего счета пользователя
 * @link /api/v1/user/admin/user/:id/referrals/balance */
export async function apiV1UserAdminUserReferralsBalanceRead(
  { id }: ApiV1UserAdminUserReferralsBalanceReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserReferralsBalanceReadQueryResponse>> {
  const res = await client<ApiV1UserAdminUserReferralsBalanceReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/referrals/balance`,
    ...options,
  })
  return res
}
