import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserReferralsTransactionsListQueryResponse, ApiV1UserReferralsTransactionsListQueryParams } from "../../../models/ts/apiController/ApiV1UserReferralsTransactionsList"

/**
 * @description .
 * @summary Список реферальных транзакций пользователя
 * @link /api/v1/user/referrals/transactions */
export async function apiV1UserReferralsTransactionsList(
  params?: ApiV1UserReferralsTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserReferralsTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/referrals/transactions`,
    params,
    ...options,
  })
  return res
}
