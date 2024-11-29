import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminPromocodeEnableCreateMutationResponse, ApiV1ServiceAdminPromocodeEnableCreatePathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeEnableCreate"

/**
 * @description Список сообщений **message_type**:* **promocode_not_found**Промокод с указанным ID {} не обнаружен.* **promocode_is_active**Указанный промокод {} активен.* **promocode_is_expired**Срок действия указанного промокода {} истек.* **number_transactions_for_promocode_is_exhausted**Количество транзакций для промокода {} исчерпано.
 * @summary Включение промокода
 * @link /api/v1/service/admin/promocode/:id/enable */
export async function apiV1ServiceAdminPromocodeEnableCreate(
  { id }: ApiV1ServiceAdminPromocodeEnableCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeEnableCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeEnableCreateMutationResponse>({
    method: "post",
    url: `/api/v1/service/admin/promocode/${id}/enable`,
    ...options,
  })
  return res
}
