import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceClearPortalUserThemeCreateMutationResponse,
  ApiV1UserDeviceClearPortalUserThemeCreatePathParams,
  ApiV1UserDeviceClearPortalUserThemeCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceClearPortalUserThemeCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceClearPortalUserThemeCreateClient = typeof client<ApiV1UserDeviceClearPortalUserThemeCreateMutationResponse, ApiV1UserDeviceClearPortalUserThemeCreate201, never>
type ApiV1UserDeviceClearPortalUserThemeCreate = {
  data: ApiV1UserDeviceClearPortalUserThemeCreateMutationResponse
  error: ApiV1UserDeviceClearPortalUserThemeCreate201
  request: never
  pathParams: ApiV1UserDeviceClearPortalUserThemeCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceClearPortalUserThemeCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceClearPortalUserThemeCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceClearPortalUserThemeCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Сброс темы пользователя Ministra для устройства пользователя
 * @link /api/v1/user/device/:id/clear_portal_user_theme/ */
export function useApiV1UserDeviceClearPortalUserThemeCreate(
  id: ApiV1UserDeviceClearPortalUserThemeCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceClearPortalUserThemeCreate["response"], ApiV1UserDeviceClearPortalUserThemeCreate["error"], void>
    client?: ApiV1UserDeviceClearPortalUserThemeCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceClearPortalUserThemeCreate["response"], ApiV1UserDeviceClearPortalUserThemeCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceClearPortalUserThemeCreate["response"], ApiV1UserDeviceClearPortalUserThemeCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserDeviceClearPortalUserThemeCreate["data"], ApiV1UserDeviceClearPortalUserThemeCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/device/${id}/clear_portal_user_theme/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
