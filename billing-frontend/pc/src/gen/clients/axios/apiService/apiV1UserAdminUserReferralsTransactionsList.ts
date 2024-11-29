import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserReferralsTransactionsListQueryResponse,
  ApiV1UserAdminUserReferralsTransactionsListPathParams,
  ApiV1UserAdminUserReferralsTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserReferralsTransactionsList"

/**
 * @description .
 * @summary Список реферальных транзакций пользователя
 * @link /api/v1/user/admin/user/:id/referrals/transactions */
export async function apiV1UserAdminUserReferralsTransactionsList(
  { id }: ApiV1UserAdminUserReferralsTransactionsListPathParams,
  params?: ApiV1UserAdminUserReferralsTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserReferralsTransactionsListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserReferralsTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/referrals/transactions`,
    params,
    ...options,
  })
  return res
}
