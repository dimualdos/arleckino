import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminMinistraCompareChannelsCreateMutationResponse,
  ApiV1ServiceAdminMinistraCompareChannelsCreatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraCompareChannelsCreate"

/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **ministra_server_custom_api_params_empty**Для сервера Ministra не указаны параметры подключения к Custom API.* **ministra_server_custom_api_url_is_incorrect**Для сервера Ministra неверно указан URL подключения к Custom API.
 * @summary Сравнение списка жанров и каналов сервера Ministra с группами и каналами плейлиста по умолчанию
 * @link /api/v1/service/admin/ministra/:id/compare-channels/ */
export async function apiV1ServiceAdminMinistraCompareChannelsCreate(
  { id }: ApiV1ServiceAdminMinistraCompareChannelsCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraCompareChannelsCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraCompareChannelsCreateMutationResponse>({
    method: "post",
    url: `/api/v1/service/admin/ministra/${id}/compare-channels/`,
    ...options,
  })
  return res
}
