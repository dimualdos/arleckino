import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserReferralsStatisticsReadQueryResponse } from "../../../models/ts/apiController/ApiV1UserReferralsStatisticsRead"

/**
 * @description .
 * @summary Статистика внутреннего счета пользователя за период
 * @link /api/v1/user/referrals/statistics */
export async function apiV1UserReferralsStatisticsRead(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserReferralsStatisticsReadQueryResponse>> {
  const res = await client<ApiV1UserReferralsStatisticsReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/referrals/statistics`,
    ...options,
  })
  return res
}
