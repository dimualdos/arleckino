import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceRefreshOttIdCreateMutationResponse,
  ApiV1UserAdminUserDeviceRefreshOttIdCreatePathParams,
  ApiV1UserAdminUserDeviceRefreshOttIdCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceRefreshOttIdCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceRefreshOttIdCreateClient = typeof client<ApiV1UserAdminUserDeviceRefreshOttIdCreateMutationResponse, ApiV1UserAdminUserDeviceRefreshOttIdCreate201, never>
type ApiV1UserAdminUserDeviceRefreshOttIdCreate = {
  data: ApiV1UserAdminUserDeviceRefreshOttIdCreateMutationResponse
  error: ApiV1UserAdminUserDeviceRefreshOttIdCreate201
  request: never
  pathParams: ApiV1UserAdminUserDeviceRefreshOttIdCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceRefreshOttIdCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceRefreshOttIdCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceRefreshOttIdCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_ott_id_not_found**Указанное значение OttId {] не обнаружено.* **device_refresh_ott_id_attempts_count_is_exhausted**Исчерпано количество попыток ({}) изменения OttId в сутки, следующая попытка возможна после {}.* **device_refresh_ott_id_attempts_interval_not_expired**Интервал между попытками ({}) изменения OttId еще не истек, следующая попытка возможна после {}.* **device_refresh_ott_id_active_subscription_not_found**Отсутствует активная подписка для устройства.* **device_refresh_ott_id_view_type_not_equal_playlist**Тип просмотра устройства не равен playlist.
 * @summary Изменение OttId для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/refresh-ott-id/ */
export function useApiV1UserAdminUserDeviceRefreshOttIdCreate(
  deviceId: ApiV1UserAdminUserDeviceRefreshOttIdCreatePathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceRefreshOttIdCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserDeviceRefreshOttIdCreate["response"], ApiV1UserAdminUserDeviceRefreshOttIdCreate["error"], void>
    client?: ApiV1UserAdminUserDeviceRefreshOttIdCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserDeviceRefreshOttIdCreate["response"], ApiV1UserAdminUserDeviceRefreshOttIdCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserDeviceRefreshOttIdCreate["response"], ApiV1UserAdminUserDeviceRefreshOttIdCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserAdminUserDeviceRefreshOttIdCreate["data"], ApiV1UserAdminUserDeviceRefreshOttIdCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/refresh-ott-id/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
