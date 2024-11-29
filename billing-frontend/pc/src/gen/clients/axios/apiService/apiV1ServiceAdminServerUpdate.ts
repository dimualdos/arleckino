import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminServerUpdateMutationRequest,
  ApiV1ServiceAdminServerUpdateMutationResponse,
  ApiV1ServiceAdminServerUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminServerUpdate"

/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export async function apiV1ServiceAdminServerUpdate(
  { id }: ApiV1ServiceAdminServerUpdatePathParams,
  data?: ApiV1ServiceAdminServerUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminServerUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminServerUpdateMutationResponse, ApiV1ServiceAdminServerUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/service/admin/server/${id}/`,
    data,
    ...options,
  })
  return res
}
