import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemUpdateMutationRequest,
  ApiV1BillingAdminPaymentSystemUpdateMutationResponse,
  ApiV1BillingAdminPaymentSystemUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemUpdate"

/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export async function apiV1BillingAdminPaymentSystemUpdate(
  { id }: ApiV1BillingAdminPaymentSystemUpdatePathParams,
  data: ApiV1BillingAdminPaymentSystemUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemUpdateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemUpdateMutationResponse, ApiV1BillingAdminPaymentSystemUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/billing/admin/payment/system/${id}/`,
    data,
    ...options,
  })
  return res
}
