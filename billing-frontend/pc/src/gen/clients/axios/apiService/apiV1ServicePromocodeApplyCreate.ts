import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServicePromocodeApplyCreateMutationRequest, ApiV1ServicePromocodeApplyCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ServicePromocodeApplyCreate"

/**
 * @description Список сообщений **message_type**:* **promocode_not_found**Промокод с указанным ID {} не обнаружен.* **promocode_is_not_active**Указанный промокод {} не активен.* **promocode_is_expired**Срок действия указанного промокода {} истек.* **number_transactions_for_promocode_is_exhausted**Количество транзакций для промокода {} исчерпано.* **promocode_cannot_be_applied_with_personal_discount**Указана персональная скидка, промокод не может быть применен.
 * @summary Применение промокода
 * @link /api/v1/service/promocode/apply */
export async function apiV1ServicePromocodeApplyCreate(
  data: ApiV1ServicePromocodeApplyCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServicePromocodeApplyCreateMutationResponse>> {
  const res = await client<ApiV1ServicePromocodeApplyCreateMutationResponse, ApiV1ServicePromocodeApplyCreateMutationRequest>({
    method: "post",
    url: `/api/v1/service/promocode/apply`,
    data,
    ...options,
  })
  return res
}
