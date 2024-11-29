import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceServerReadQueryResponse, ApiV1UserDeviceServerReadPathParams } from "../../../models/ts/apiController/ApiV1UserDeviceServerRead"

/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер с указанным ID не обнаружен.* **server_disabled**Сервер с указанным ID отключен администратором.
 * @summary Просмотр, изменение и удаление сервера для устройства пользователя
 * @link /api/v1/user/device/:id/server/ */
export async function apiV1UserDeviceServerRead(
  { id }: ApiV1UserDeviceServerReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceServerReadQueryResponse>> {
  const res = await client<ApiV1UserDeviceServerReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/device/${id}/server/`,
    ...options,
  })
  return res
}
