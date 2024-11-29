import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingAdminPaymentSystemListListQueryResponse, ApiV1BillingAdminPaymentSystemListListQueryParams } from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemListList"

/**
 * @description .
 * @summary Список всех платежных систем
 * @link /api/v1/billing/admin/payment/system/list/ */
export async function apiV1BillingAdminPaymentSystemListList(
  params?: ApiV1BillingAdminPaymentSystemListListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemListListQueryResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemListListQueryResponse>({
    method: "get",
    url: `/api/v1/billing/admin/payment/system/list/`,
    params,
    ...options,
  })
  return res
}
