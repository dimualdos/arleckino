import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemShowCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemShowCreatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemShowCreate"

/**
 * @description Список сообщений **message_type**:* **payment_system_is_not_hidden**Флаг скрытия для платежной системы с указанным ID {} уже снят.
 * @summary Показать платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/show/ */
export async function apiV1BillingAdminPaymentSystemShowCreate(
  { id }: ApiV1BillingAdminPaymentSystemShowCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemShowCreateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemShowCreateMutationResponse>({
    method: "post",
    url: `/api/v1/billing/admin/payment/system/${id}/show/`,
    ...options,
  })
  return res
}
