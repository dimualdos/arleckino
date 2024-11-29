import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse,
  ApiV1BillingAdminPaymentTransactionAggregateListQueryParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionAggregateList"

/**
 * @description .
 * @summary Агрегированный список платежных транзакций
 * @link /api/v1/billing/admin/payment/transaction/aggregate/ */
export async function apiV1BillingAdminPaymentTransactionAggregateList(
  params?: ApiV1BillingAdminPaymentTransactionAggregateListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse>> {
  const res = await client<ApiV1BillingAdminPaymentTransactionAggregateListQueryResponse>({
    method: "get",
    url: `/api/v1/billing/admin/payment/transaction/aggregate/`,
    params,
    ...options,
  })
  return res
}
