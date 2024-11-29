import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceRefreshOttIdCreateMutationResponse, ApiV1UserDeviceRefreshOttIdCreatePathParams } from "../../../models/ts/apiController/ApiV1UserDeviceRefreshOttIdCreate"

/**
 * @description Список сообщений **message_type**:* **device_ott_id_not_found**Указанное значение OttId {] не обнаружено.* **device_refresh_ott_id_attempts_count_is_exhausted**Исчерпано количество попыток ({}) изменения OttId в сутки, следующая попытка возможна после {}.* **device_refresh_ott_id_attempts_interval_not_expired**Интервал между попытками ({}) изменения OttId еще не истек, следующая попытка возможна после {}.* **device_refresh_ott_id_active_subscription_not_found**Отсутствует активная подписка для устройства.* **device_refresh_ott_id_view_type_not_equal_playlist**Тип просмотра устройства не равен playlist.
 * @summary Изменение OttId для устройства
 * @link /api/v1/user/device/:id/refresh_ott_id/ */
export async function apiV1UserDeviceRefreshOttIdCreate(
  { id }: ApiV1UserDeviceRefreshOttIdCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceRefreshOttIdCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceRefreshOttIdCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/device/${id}/refresh_ott_id/`,
    ...options,
  })
  return res
}
