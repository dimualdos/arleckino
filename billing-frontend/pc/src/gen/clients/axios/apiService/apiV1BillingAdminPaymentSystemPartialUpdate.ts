import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest,
  ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse,
  ApiV1BillingAdminPaymentSystemPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemPartialUpdate"

/**
 * @description .
 * @summary Изменение и удаление платежной системы
 * @link /api/v1/billing/admin/payment/system/:id/ */
export async function apiV1BillingAdminPaymentSystemPartialUpdate(
  { id }: ApiV1BillingAdminPaymentSystemPartialUpdatePathParams,
  data: ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemPartialUpdateMutationResponse, ApiV1BillingAdminPaymentSystemPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/billing/admin/payment/system/${id}/`,
    data,
    ...options,
  })
  return res
}
