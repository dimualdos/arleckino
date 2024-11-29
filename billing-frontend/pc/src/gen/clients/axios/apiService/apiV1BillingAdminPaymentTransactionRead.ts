import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingAdminPaymentTransactionReadQueryResponse, ApiV1BillingAdminPaymentTransactionReadPathParams } from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionRead"

/**
 * @description .
 * @summary Просмотр данных платежной транзакции
 * @link /api/v1/billing/admin/payment/transaction/:id/ */
export async function apiV1BillingAdminPaymentTransactionRead(
  { id }: ApiV1BillingAdminPaymentTransactionReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentTransactionReadQueryResponse>> {
  const res = await client<ApiV1BillingAdminPaymentTransactionReadQueryResponse>({
    method: "get",
    url: `/api/v1/billing/admin/payment/transaction/${id}/`,
    ...options,
  })
  return res
}
