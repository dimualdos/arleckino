import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDeviceViewTypeCreateMutationRequest,
  ApiV1UserDeviceViewTypeCreateMutationResponse,
  ApiV1UserDeviceViewTypeCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDeviceViewTypeCreate"

/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Изменение типа просмотра для устройства пользователя
 * @link /api/v1/user/device/:id/view_type/ */
export async function apiV1UserDeviceViewTypeCreate(
  { id }: ApiV1UserDeviceViewTypeCreatePathParams,
  data: ApiV1UserDeviceViewTypeCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceViewTypeCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceViewTypeCreateMutationResponse, ApiV1UserDeviceViewTypeCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/view_type/`,
    data,
    ...options,
  })
  return res
}
