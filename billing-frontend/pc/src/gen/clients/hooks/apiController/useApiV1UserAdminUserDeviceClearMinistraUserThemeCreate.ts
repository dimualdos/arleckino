import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateMutationResponse,
  ApiV1UserAdminUserDeviceClearMinistraUserThemeCreatePathParams,
  ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateClient = typeof client<
  ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateMutationResponse,
  ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate201,
  never
>
type ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate = {
  data: ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateMutationResponse
  error: ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate201
  request: never
  pathParams: ApiV1UserAdminUserDeviceClearMinistraUserThemeCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Сброс темы пользователя Ministra для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/clear-ministra-user-theme/ */
export function useApiV1UserAdminUserDeviceClearMinistraUserThemeCreate(
  deviceId: ApiV1UserAdminUserDeviceClearMinistraUserThemeCreatePathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceClearMinistraUserThemeCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["response"], ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["error"], void>
    client?: ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["response"], ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["response"], ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["data"], ApiV1UserAdminUserDeviceClearMinistraUserThemeCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/clear-ministra-user-theme/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
