import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1BillingAdminPaymentSystemReadQueryResponse, ApiV1BillingAdminPaymentSystemReadPathParams } from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemRead"

/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export async function apiV1BillingAdminPaymentSystemRead(
  { id }: ApiV1BillingAdminPaymentSystemReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemReadQueryResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemReadQueryResponse>({
    method: "get",
    url: `/api/v1/billing/admin/payment/system/${id}/`,
    ...options,
  })
  return res
}
