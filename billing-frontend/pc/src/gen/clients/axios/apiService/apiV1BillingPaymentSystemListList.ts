import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingPaymentSystemListListQueryResponse, ApiV1BillingPaymentSystemListListQueryParams } from "../../../models/ts/apiController/ApiV1BillingPaymentSystemListList"

/**
 * @description .
 * @summary Список всех платежных систем
 * @link /api/v1/billing/payment/system/list/ */
export async function apiV1BillingPaymentSystemListList(
  params?: ApiV1BillingPaymentSystemListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingPaymentSystemListListQueryResponse>> {
  const res = await client<ApiV1BillingPaymentSystemListListQueryResponse>({
    method: "get",
    url: `/api/v1/billing/payment/system/list/`,
    params,
    ...options,
  })
  return res
}
