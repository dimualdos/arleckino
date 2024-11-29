import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserReferralsBalanceTransactionsListQueryResponse,
  ApiV1UserReferralsBalanceTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceTransactionsList"

/**
 * @description .
 * @summary Список транзакций вывода средств, перевода на текущий баланс
 * @link /api/v1/user/referrals/balance/transactions */
export async function apiV1UserReferralsBalanceTransactionsList(
  params?: ApiV1UserReferralsBalanceTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsBalanceTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserReferralsBalanceTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/referrals/balance/transactions`,
    params,
    ...options,
  })
  return res
}
