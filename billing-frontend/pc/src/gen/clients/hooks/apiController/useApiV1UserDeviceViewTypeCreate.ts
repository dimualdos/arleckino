import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceViewTypeCreateMutationRequest,
  ApiV1UserDeviceViewTypeCreateMutationResponse,
  ApiV1UserDeviceViewTypeCreatePathParams,
  ApiV1UserDeviceViewTypeCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceViewTypeCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceViewTypeCreateClient = typeof client<ApiV1UserDeviceViewTypeCreateMutationResponse, ApiV1UserDeviceViewTypeCreate201, ApiV1UserDeviceViewTypeCreateMutationRequest>
type ApiV1UserDeviceViewTypeCreate = {
  data: ApiV1UserDeviceViewTypeCreateMutationResponse
  error: ApiV1UserDeviceViewTypeCreate201
  request: ApiV1UserDeviceViewTypeCreateMutationRequest
  pathParams: ApiV1UserDeviceViewTypeCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceViewTypeCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceViewTypeCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceViewTypeCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Изменение типа просмотра для устройства пользователя
 * @link /api/v1/user/device/:id/view_type/ */
export function useApiV1UserDeviceViewTypeCreate(
  id: ApiV1UserDeviceViewTypeCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceViewTypeCreate["response"], ApiV1UserDeviceViewTypeCreate["error"], ApiV1UserDeviceViewTypeCreate["request"]>
    client?: ApiV1UserDeviceViewTypeCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceViewTypeCreate["response"], ApiV1UserDeviceViewTypeCreate["error"], ApiV1UserDeviceViewTypeCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceViewTypeCreate["response"], ApiV1UserDeviceViewTypeCreate["error"], ApiV1UserDeviceViewTypeCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceViewTypeCreate["data"], ApiV1UserDeviceViewTypeCreate["error"], ApiV1UserDeviceViewTypeCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/view_type/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
