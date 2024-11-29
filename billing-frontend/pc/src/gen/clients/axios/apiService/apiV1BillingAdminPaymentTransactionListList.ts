import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentTransactionListListQueryResponse,
  ApiV1BillingAdminPaymentTransactionListListQueryParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionListList"

/**
 * @description .
 * @summary Список всех платежных транзакций
 * @link /api/v1/billing/admin/payment/transaction/list/ */
export async function apiV1BillingAdminPaymentTransactionListList(
  params?: ApiV1BillingAdminPaymentTransactionListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentTransactionListListQueryResponse>> {
  const res = await client<ApiV1BillingAdminPaymentTransactionListListQueryResponse>({
    method: "get",
    url: `/api/v1/billing/admin/payment/transaction/list/`,
    params,
    ...options,
  })
  return res
}
