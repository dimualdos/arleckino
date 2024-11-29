import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemEnableCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemEnableCreatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemEnableCreate"

/**
 * @description Список сообщений **message_type**:* **payment_system_is_enabled**Флаг активности для платежной системы с указанным ID {} уже установлен.
 * @summary Включить платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/enable/ */
export async function apiV1BillingAdminPaymentSystemEnableCreate(
  { id }: ApiV1BillingAdminPaymentSystemEnableCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemEnableCreateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemEnableCreateMutationResponse>({
    method: "post",
    url: `/api/v1/billing/admin/payment/system/${id}/enable/`,
    ...options,
  })
  return res
}
