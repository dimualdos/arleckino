import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingPaymentTransactionReadQueryResponse, ApiV1BillingPaymentTransactionReadPathParams } from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionRead"

/**
 * @description .
 * @summary Просмотр данных платежной транзакции
 * @link /api/v1/billing/payment/transaction/:id/ */
export async function apiV1BillingPaymentTransactionRead(
  { id }: ApiV1BillingPaymentTransactionReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingPaymentTransactionReadQueryResponse>> {
  const res = await client<ApiV1BillingPaymentTransactionReadQueryResponse>({
    method: "get",
    url: `/api/v1/billing/payment/transaction/${id}/`,
    ...options,
  })
  return res
}
