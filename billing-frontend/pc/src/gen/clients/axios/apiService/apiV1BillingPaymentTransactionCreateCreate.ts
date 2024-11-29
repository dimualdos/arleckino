import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingPaymentTransactionCreateCreateMutationRequest,
  ApiV1BillingPaymentTransactionCreateCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionCreateCreate"

/**
 * @description Список сообщений **message_type**:* **policy_agreement_must_be_set**Необходимо подтвердить соглашение о политике конфиденциальности.* **amount_must_be_positive**Сумма должна быть больше нуля.* **payment_system_not_found_by_id**Платежная система с указанным ID {} не обнаружена.* **user_balance_replenishment_is_disable**Пополнение баланса запрещено администратором.* **payment_system_is_disabled**Платежная система с указанным ID {} отключена администратором.* **payment_system_is_disabled_for_user**Платежная система с указанным ID {} отключена для пользователя администратором.* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Создание платежной транзакции пополнения баланса
 * @link /api/v1/billing/payment/transaction/create/ */
export async function apiV1BillingPaymentTransactionCreateCreate(
  data: ApiV1BillingPaymentTransactionCreateCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingPaymentTransactionCreateCreateMutationResponse>> {
  const res = await client<ApiV1BillingPaymentTransactionCreateCreateMutationResponse, ApiV1BillingPaymentTransactionCreateCreateMutationRequest>({
    method: "post",
    url: `/api/v1/billing/payment/transaction/create/`,
    data,
    ...options,
  })
  return res
}
