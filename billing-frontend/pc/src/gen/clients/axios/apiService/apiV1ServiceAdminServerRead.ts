import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminServerReadQueryResponse, ApiV1ServiceAdminServerReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminServerRead"

/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export async function apiV1ServiceAdminServerRead(
  { id }: ApiV1ServiceAdminServerReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminServerReadQueryResponse>> {
  const res = await client<ApiV1ServiceAdminServerReadQueryResponse>({
    method: "get",
    url: `/api/v1/service/admin/server/${id}/`,
    ...options,
  })
  return res
}
