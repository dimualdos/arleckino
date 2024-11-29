import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingPaymentSystemReadQueryResponse, ApiV1BillingPaymentSystemReadPathParams } from "../../../models/ts/apiController/ApiV1BillingPaymentSystemRead"

/**
 * @description .
 * @summary Просмотр данных платежной системы
 * @link /api/v1/billing/payment/system/:id/ */
export async function apiV1BillingPaymentSystemRead(
  { id }: ApiV1BillingPaymentSystemReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingPaymentSystemReadQueryResponse>> {
  const res = await client<ApiV1BillingPaymentSystemReadQueryResponse>({
    method: "get",
    url: `/api/v1/billing/payment/system/${id}/`,
    ...options,
  })
  return res
}
