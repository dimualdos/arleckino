import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceRefreshOttIdCreateMutationResponse,
  ApiV1UserAdminUserDeviceRefreshOttIdCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceRefreshOttIdCreate"

/**
 * @description Список сообщений **message_type**:* **device_ott_id_not_found**Указанное значение OttId {] не обнаружено.* **device_refresh_ott_id_attempts_count_is_exhausted**Исчерпано количество попыток ({}) изменения OttId в сутки, следующая попытка возможна после {}.* **device_refresh_ott_id_attempts_interval_not_expired**Интервал между попытками ({}) изменения OttId еще не истек, следующая попытка возможна после {}.* **device_refresh_ott_id_active_subscription_not_found**Отсутствует активная подписка для устройства.* **device_refresh_ott_id_view_type_not_equal_playlist**Тип просмотра устройства не равен playlist.
 * @summary Изменение OttId для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/refresh-ott-id/ */
export async function apiV1UserAdminUserDeviceRefreshOttIdCreate(
  { deviceId, id }: ApiV1UserAdminUserDeviceRefreshOttIdCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceRefreshOttIdCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceRefreshOttIdCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/device/${deviceId}/refresh-ott-id/`,
    ...options,
  })
  return res
}
