import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest,
  ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemCreateCreate"

/**
 * @description .
 * @summary Создание платежной системы
 * @link /api/v1/billing/admin/payment/system/create/ */
export async function apiV1BillingAdminPaymentSystemCreateCreate(
  data: ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemCreateCreateMutationResponse, ApiV1BillingAdminPaymentSystemCreateCreateMutationRequest>({
    method: "post",
    url: `/api/v1/billing/admin/payment/system/create/`,
    data,
    ...options,
  })
  return res
}
