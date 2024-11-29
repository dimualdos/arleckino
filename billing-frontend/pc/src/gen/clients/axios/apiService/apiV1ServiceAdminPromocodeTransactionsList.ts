import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminPromocodeTransactionsListQueryResponse,
  ApiV1ServiceAdminPromocodeTransactionsListPathParams,
  ApiV1ServiceAdminPromocodeTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeTransactionsList"

/**
 * @description .
 * @summary Список транзакций использования промокода
 * @link /api/v1/service/admin/promocode/:id/transactions */
export async function apiV1ServiceAdminPromocodeTransactionsList(
  { id }: ApiV1ServiceAdminPromocodeTransactionsListPathParams,
  params?: ApiV1ServiceAdminPromocodeTransactionsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeTransactionsListQueryResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeTransactionsListQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/promocode/${id}/transactions`,
    params,
    ...options,
  })
  return res
}
