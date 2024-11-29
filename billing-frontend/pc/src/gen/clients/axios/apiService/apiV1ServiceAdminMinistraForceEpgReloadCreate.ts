import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminMinistraForceEpgReloadCreateMutationResponse,
  ApiV1ServiceAdminMinistraForceEpgReloadCreatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraForceEpgReloadCreate"

/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID {ID} не обнаружен.* **ministra_auth_failed**Возникла ошибка авторизации пользователя на портале Ministra.* **ministra_server_force_epg_reload_failed**Возникла ошибка принудительного обновления EPG на портале Ministra: {ошибка}.
 * @summary Принудительное обновление EPG сервера Ministra
 * @link /api/v1/service/admin/ministra/:id/force-epg-reload */
export async function apiV1ServiceAdminMinistraForceEpgReloadCreate(
  { id }: ApiV1ServiceAdminMinistraForceEpgReloadCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminMinistraForceEpgReloadCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminMinistraForceEpgReloadCreateMutationResponse>({
    method: "post",
    url: `/api/v1/service/admin/ministra/${id}/force-epg-reload`,
    ...options,
  })
  return res
}
