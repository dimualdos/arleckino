import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1OrdersCreateMutationRequest, ApiV1OrdersCreateMutationResponse } from "../../../models/ts/apiController/ApiV1OrdersCreate"

/**
 * @description Список сообщений **message_type**:* **not_user_device**Указаны ID устройств, не принадлежащих пользователю.* **not_exist_device**Указаны ID отсутствующих устройств.* **not_enough_money**Недостаточно средств на балансе, пополните баланс на сумму {amount} {currency}.* **device_subscription_extension_impossible**Изменение премиальной подписки возможно только по ее завершению. Обратитесь в службу поддержки.* **device_subscription_recalculation**Будет выполнен перерасчет стоимости остатка дней текущей подписки, премиальная подписка начнет действоватьс момента продления.* **promocode_not_found**Указанный промокод {} не обнаружен.* **promocode_is_expired**Срок действия указанного промокода {} истек.* **promocode_is_not_active**Указанный промокод {} не активен.* **number_transactions_for_promocode_is_exhausted**Количество транзакций для промокода {} исчерпано.* **promocode_transaction_not_found**Транзакция использования промокода с указанным ID {} не обнаружена.* **promocode_transaction_already_processed**Транзакция использования промокода с указанным ID {} уже обработана.* **promocode_transaction_created_by_another_user**Транзакция использования промокода с указанным ID {} создана другим пользователем.* **devices_subscription_date_alignment_days_amount_is_incorrect**Для режима выравнивания дат подписок количество дней должно быть равно 30.* **devices_subscription_date_alignment_device_ids_is_incorrect**Для режима выравнивания дат подписок необходимо указать ID нескольких устройств.
 * @summary Создание заявки на продление подписки для указанных устройств пользователя
 * @link /api/v1/orders/ */
export async function apiV1OrdersCreate(data: ApiV1OrdersCreateMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1OrdersCreateMutationResponse>> {
  const res = await client<ApiV1OrdersCreateMutationResponse, ApiV1OrdersCreateMutationRequest>({
    method: "post",
    url: `/api/v1/orders/`,
    data,
    ...options,
  })
  return res
}
