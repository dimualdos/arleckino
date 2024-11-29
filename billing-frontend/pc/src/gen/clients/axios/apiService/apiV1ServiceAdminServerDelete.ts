import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminServerDeleteMutationResponse, ApiV1ServiceAdminServerDeletePathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminServerDelete"

/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export async function apiV1ServiceAdminServerDelete(
  { id }: ApiV1ServiceAdminServerDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminServerDeleteMutationResponse>> {
  const res = await client<ApiV1ServiceAdminServerDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/service/admin/server/${id}/`,
    ...options,
  })
  return res
}
