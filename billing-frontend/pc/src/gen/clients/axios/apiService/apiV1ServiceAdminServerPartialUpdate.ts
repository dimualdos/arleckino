import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminServerPartialUpdateMutationRequest,
  ApiV1ServiceAdminServerPartialUpdateMutationResponse,
  ApiV1ServiceAdminServerPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminServerPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **server_not_found_by_id**Сервер для замены с указанным ID не обнаружен.* **replacement_server_matches_server_to_remove**Сервер для замены совпадает с удаляемым сервером.* **virtual_server_already_exists**Виртуальный сервер уже существует.
 * @summary Просмотр, изменение, удаление сервера
 * @link /api/v1/service/admin/server/:id/ */
export async function apiV1ServiceAdminServerPartialUpdate(
  { id }: ApiV1ServiceAdminServerPartialUpdatePathParams,
  data?: ApiV1ServiceAdminServerPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminServerPartialUpdateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminServerPartialUpdateMutationResponse, ApiV1ServiceAdminServerPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/service/admin/server/${id}/`,
    data,
    ...options,
  })
  return res
}
