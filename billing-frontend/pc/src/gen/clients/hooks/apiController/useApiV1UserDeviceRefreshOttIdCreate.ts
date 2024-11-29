import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceRefreshOttIdCreateMutationResponse,
  ApiV1UserDeviceRefreshOttIdCreatePathParams,
  ApiV1UserDeviceRefreshOttIdCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceRefreshOttIdCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceRefreshOttIdCreateClient = typeof client<ApiV1UserDeviceRefreshOttIdCreateMutationResponse, ApiV1UserDeviceRefreshOttIdCreate201, never>
type ApiV1UserDeviceRefreshOttIdCreate = {
  data: ApiV1UserDeviceRefreshOttIdCreateMutationResponse
  error: ApiV1UserDeviceRefreshOttIdCreate201
  request: never
  pathParams: ApiV1UserDeviceRefreshOttIdCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceRefreshOttIdCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceRefreshOttIdCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceRefreshOttIdCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_ott_id_not_found**Указанное значение OttId {] не обнаружено.* **device_refresh_ott_id_attempts_count_is_exhausted**Исчерпано количество попыток ({}) изменения OttId в сутки, следующая попытка возможна после {}.* **device_refresh_ott_id_attempts_interval_not_expired**Интервал между попытками ({}) изменения OttId еще не истек, следующая попытка возможна после {}.* **device_refresh_ott_id_active_subscription_not_found**Отсутствует активная подписка для устройства.* **device_refresh_ott_id_view_type_not_equal_playlist**Тип просмотра устройства не равен playlist.
 * @summary Изменение OttId для устройства
 * @link /api/v1/user/device/:id/refresh_ott_id/ */
export function useApiV1UserDeviceRefreshOttIdCreate(
  id: ApiV1UserDeviceRefreshOttIdCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceRefreshOttIdCreate["response"], ApiV1UserDeviceRefreshOttIdCreate["error"], void>
    client?: ApiV1UserDeviceRefreshOttIdCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceRefreshOttIdCreate["response"], ApiV1UserDeviceRefreshOttIdCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceRefreshOttIdCreate["response"], ApiV1UserDeviceRefreshOttIdCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserDeviceRefreshOttIdCreate["data"], ApiV1UserDeviceRefreshOttIdCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/device/${id}/refresh_ott_id/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
