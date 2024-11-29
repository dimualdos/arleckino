import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentSystemHideCreateMutationResponse,
  ApiV1BillingAdminPaymentSystemHideCreatePathParams,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentSystemHideCreate"

/**
 * @description При скрытии все пользователи, зарегистрированные после даты скрытия, не смогут использовать эту ПС.Список сообщений **message_type**:* **payment_system_is_hidden**Флаг скрытия для платежной системы с указанным ID {} уже установлен.
 * @summary Скрыть платежную систему.
 * @link /api/v1/billing/admin/payment/system/:id/hide/ */
export async function apiV1BillingAdminPaymentSystemHideCreate(
  { id }: ApiV1BillingAdminPaymentSystemHideCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentSystemHideCreateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentSystemHideCreateMutationResponse>({
    method: "post",
    url: `/api/v1/billing/admin/payment/system/${id}/hide/`,
    ...options,
  })
  return res
}
