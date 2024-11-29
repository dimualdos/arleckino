import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceUpdateMutationRequest,
  ApiV1UserAdminUserDeviceUpdateMutationResponse,
  ApiV1UserAdminUserDeviceUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceUpdate"

/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **device_portal_params_empty**Не указанны обязательные параметры портала.* **user_login_is_already_used**Указанный логин пользователя уже используется на сервере Ministra.* **could_not_connect_to_api_server**Не удалось соединиться с сервером промежуточного API.* **attempts_exhausted**Исчерпались попытки повторения операции на сервере промежуточного API.
 * @summary Просмотр и изменение данных устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId */
export async function apiV1UserAdminUserDeviceUpdate(
  { deviceId, id }: ApiV1UserAdminUserDeviceUpdatePathParams,
  data: ApiV1UserAdminUserDeviceUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceUpdateMutationResponse, ApiV1UserAdminUserDeviceUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/admin/user/${id}/device/${deviceId}`,
    data,
    ...options,
  })
  return res
}
