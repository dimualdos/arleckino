import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDeviceClearPortalUserThemeCreateMutationResponse,
  ApiV1UserDeviceClearPortalUserThemeCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDeviceClearPortalUserThemeCreate"

/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Сброс темы пользователя Ministra для устройства пользователя
 * @link /api/v1/user/device/:id/clear_portal_user_theme/ */
export async function apiV1UserDeviceClearPortalUserThemeCreate(
  { id }: ApiV1UserDeviceClearPortalUserThemeCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceClearPortalUserThemeCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceClearPortalUserThemeCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/device/${id}/clear_portal_user_theme/`,
    ...options,
  })
  return res
}
