import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemDisableCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemDisableCreatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemDisableCreate"

/**
 * @description Список сообщений **message_type**:* **payment_system_is_disabled**Флаг активности для платежной системы с указанным ID {} уже снят.
 * @summary Отключить платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/disable/ */
export async function apiV1BillingAdminPaymentSystemDisableCreate(
  { id }: ApiV1BillingAdminPaymentSystemDisableCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemDisableCreateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemDisableCreateMutationResponse>({
    method: "post",
    url: `/api/v1/billing/admin/payment/system/${id}/disable/`,
    ...options,
  })
  return res
}
