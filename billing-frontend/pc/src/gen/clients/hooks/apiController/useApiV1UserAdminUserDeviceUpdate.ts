import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceUpdateMutationRequest,
  ApiV1UserAdminUserDeviceUpdateMutationResponse,
  ApiV1UserAdminUserDeviceUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceUpdateClient = typeof client<ApiV1UserAdminUserDeviceUpdateMutationResponse, never, ApiV1UserAdminUserDeviceUpdateMutationRequest>
type ApiV1UserAdminUserDeviceUpdate = {
  data: ApiV1UserAdminUserDeviceUpdateMutationResponse
  error: never
  request: ApiV1UserAdminUserDeviceUpdateMutationRequest
  pathParams: ApiV1UserAdminUserDeviceUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Просмотр и изменение данных устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId */
export function useApiV1UserAdminUserDeviceUpdate(
  deviceId: ApiV1UserAdminUserDeviceUpdatePathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserDeviceUpdate["response"], ApiV1UserAdminUserDeviceUpdate["error"], ApiV1UserAdminUserDeviceUpdate["request"]>
    client?: ApiV1UserAdminUserDeviceUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserDeviceUpdate["response"], ApiV1UserAdminUserDeviceUpdate["error"], ApiV1UserAdminUserDeviceUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserDeviceUpdate["response"], ApiV1UserAdminUserDeviceUpdate["error"], ApiV1UserAdminUserDeviceUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserAdminUserDeviceUpdate["data"], ApiV1UserAdminUserDeviceUpdate["error"], ApiV1UserAdminUserDeviceUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
