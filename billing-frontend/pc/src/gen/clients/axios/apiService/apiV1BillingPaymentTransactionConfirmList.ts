import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1BillingPaymentTransactionConfirmListQueryResponse,
  ApiV1BillingPaymentTransactionConfirmListPathParams,
  ApiV1BillingPaymentTransactionConfirmListQueryParams,
} from "../../../models/ts/apiController/ApiV1BillingPaymentTransactionConfirmList"

/**
 * @description Список сообщений **message_type**:* **payment_system_not_found_by_id**Платежная система с указанным ID {} не обнаружена.* **payment_system_settings_class_not_found**Класс параметров для платежной системы с указанным ID {} не обнаружен.* **payment_system_invalid_settings_format**Неверный формат поля settings у платежной системы с указанным ID {}.* **payment_transaction_not_found_by_id**Платежная транзакция с указанным ID {} не обнаружена.* **payment_transaction_created_for_another_payment_system**Платежная транзакция с указанным ID {} создана для другой платежной системы.* **payment_transaction_confirmation_invalid_signature**Неверная подпись в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_merchant_id**Неверный ID магазина в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_amount**Неверная сумма платежа в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_confirmation_invalid_email**Неверный email пользователя в данных запроса подтверждения оплаты платежной транзакции.* **payment_transaction_created_by_another_user**Платежная транзакция с указанным ID {} создана другим пользователем.* **payment_transaction_already_confirmed**Платежная транзакция с указанным ID {} уже подтверждена.
 * @summary Подтверждение успешной оплаты платежной транзакции в платежной системе
 * @link /api/v1/billing/payment/transaction/:payment_system_id/confirm/ */
export async function apiV1BillingPaymentTransactionConfirmList(
  { payment_system_id }: ApiV1BillingPaymentTransactionConfirmListPathParams,
  params?: ApiV1BillingPaymentTransactionConfirmListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1BillingPaymentTransactionConfirmListQueryResponse>> {
  const res = await client<ApiV1BillingPaymentTransactionConfirmListQueryResponse>({
    method: "get",
    url: `/api/v1/billing/payment/transaction/${payment_system_id}/confirm/`,
    params,
    ...options,
  })
  return res
}
