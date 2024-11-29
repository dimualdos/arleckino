import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDeviceServerCreateMutationRequest,
  ApiV1UserDeviceServerCreateMutationResponse,
  ApiV1UserDeviceServerCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDeviceServerCreate"

/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер с указанным ID не обнаружен.* **server_disabled**Сервер с указанным ID отключен администратором.
 * @summary Просмотр, изменение и удаление сервера для устройства пользователя
 * @link /api/v1/user/device/:id/server/ */
export async function apiV1UserDeviceServerCreate(
  { id }: ApiV1UserDeviceServerCreatePathParams,
  data: ApiV1UserDeviceServerCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceServerCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceServerCreateMutationResponse, ApiV1UserDeviceServerCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/server/`,
    data,
    ...options,
  })
  return res
}
