import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingPaymentTransactionListListQueryResponse, ApiV1BillingPaymentTransactionListListQueryParams } from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionListList"

/**
 * @description .
 * @summary Список всех платежных транзакций текущего пользователя
 * @link /api/v1/billing/payment/transaction/list/ */
export async function apiV1BillingPaymentTransactionListList(
  params?: ApiV1BillingPaymentTransactionListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingPaymentTransactionListListQueryResponse>> {
  const res = await client<ApiV1BillingPaymentTransactionListListQueryResponse>({
    method: "get",
    url: `/api/v1/billing/payment/transaction/list/`,
    params,
    ...options,
  })
  return res
}
