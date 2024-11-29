import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingAdminPaymentTransactionCreateCreateMutationRequest,
  ApiV1BillingAdminPaymentTransactionCreateCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1BillingAdminPaymentTransactionCreateCreate"

/**
 * @description Список сообщений **message_type**:* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **amount_must_be_positive**Сумма должна быть больше нуля.
 * @summary Создание платежной транзакции пополнения баланса для пользователя
 * @link /api/v1/billing/admin/payment/transaction/create/ */
export async function apiV1BillingAdminPaymentTransactionCreateCreate(
  data: ApiV1BillingAdminPaymentTransactionCreateCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingAdminPaymentTransactionCreateCreateMutationResponse>> {
  const res = await client<ApiV1BillingAdminPaymentTransactionCreateCreateMutationResponse, ApiV1BillingAdminPaymentTransactionCreateCreateMutationRequest>({
    method: "post",
    url: `/api/v1/billing/admin/payment/transaction/create/`,
    data,
    ...options,
  })
  return res
}
