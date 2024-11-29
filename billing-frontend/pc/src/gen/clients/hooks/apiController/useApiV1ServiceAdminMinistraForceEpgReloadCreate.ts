import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraForceEpgReloadCreateMutationResponse,
  ApiV1ServiceAdminMinistraForceEpgReloadCreatePathParams,
  ApiV1ServiceAdminMinistraForceEpgReloadCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraForceEpgReloadCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraForceEpgReloadCreateClient = typeof client<ApiV1ServiceAdminMinistraForceEpgReloadCreateMutationResponse, ApiV1ServiceAdminMinistraForceEpgReloadCreate201, never>
type ApiV1ServiceAdminMinistraForceEpgReloadCreate = {
  data: ApiV1ServiceAdminMinistraForceEpgReloadCreateMutationResponse
  error: ApiV1ServiceAdminMinistraForceEpgReloadCreate201
  request: never
  pathParams: ApiV1ServiceAdminMinistraForceEpgReloadCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraForceEpgReloadCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraForceEpgReloadCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraForceEpgReloadCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID {ID} не обнаружен.* **ministra_auth_failed**Возникла ошибка авторизации пользователя на портале Ministra.* **ministra_server_force_epg_reload_failed**Возникла ошибка принудительного обновления EPG на портале Ministra: {ошибка}.
 * @summary Принудительное обновление EPG сервера Ministra
 * @link /api/v1/service/admin/ministra/:id/force-epg-reload */
export function useApiV1ServiceAdminMinistraForceEpgReloadCreate(
  id: ApiV1ServiceAdminMinistraForceEpgReloadCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraForceEpgReloadCreate["response"], ApiV1ServiceAdminMinistraForceEpgReloadCreate["error"], void>
    client?: ApiV1ServiceAdminMinistraForceEpgReloadCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraForceEpgReloadCreate["response"], ApiV1ServiceAdminMinistraForceEpgReloadCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraForceEpgReloadCreate["response"], ApiV1ServiceAdminMinistraForceEpgReloadCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminMinistraForceEpgReloadCreate["data"], ApiV1ServiceAdminMinistraForceEpgReloadCreate["error"], void>({
        method: "post",
        url: `/api/v1/service/admin/ministra/${id}/force-epg-reload`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
