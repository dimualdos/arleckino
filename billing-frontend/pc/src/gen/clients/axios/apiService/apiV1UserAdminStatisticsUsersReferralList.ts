import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminStatisticsUsersReferralListQueryResponse,
  ApiV1UserAdminStatisticsUsersReferralListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminStatisticsUsersReferralList"

/**
 * @description .
 * @summary Данные для показателя "По реф. ссылкам" секции "ПОЛЬЗОВАТЕЛИ" раздела "Статистика"
 * @link /api/v1/user/admin/statistics/users/referral */
export async function apiV1UserAdminStatisticsUsersReferralList(
  params?: ApiV1UserAdminStatisticsUsersReferralListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminStatisticsUsersReferralListQueryResponse>> {
  const res = await client<ApiV1UserAdminStatisticsUsersReferralListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/statistics/users/referral`,
    params,
    ...options,
  })
  return res
}
