import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraCompareChannelsCreateMutationResponse,
  ApiV1ServiceAdminMinistraCompareChannelsCreatePathParams,
  ApiV1ServiceAdminMinistraCompareChannelsCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraCompareChannelsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraCompareChannelsCreateClient = typeof client<ApiV1ServiceAdminMinistraCompareChannelsCreateMutationResponse, ApiV1ServiceAdminMinistraCompareChannelsCreate201, never>
type ApiV1ServiceAdminMinistraCompareChannelsCreate = {
  data: ApiV1ServiceAdminMinistraCompareChannelsCreateMutationResponse
  error: ApiV1ServiceAdminMinistraCompareChannelsCreate201
  request: never
  pathParams: ApiV1ServiceAdminMinistraCompareChannelsCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraCompareChannelsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraCompareChannelsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraCompareChannelsCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **ministra_server_custom_api_params_empty**Для сервера Ministra не указаны параметры подключения к Custom API.* **ministra_server_custom_api_url_is_incorrect**Для сервера Ministra неверно указан URL подключения к Custom API.
 * @summary Сравнение списка жанров и каналов сервера Ministra с группами и каналами плейлиста по умолчанию
 * @link /api/v1/service/admin/ministra/:id/compare-channels/ */
export function useApiV1ServiceAdminMinistraCompareChannelsCreate(
  id: ApiV1ServiceAdminMinistraCompareChannelsCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraCompareChannelsCreate["response"], ApiV1ServiceAdminMinistraCompareChannelsCreate["error"], void>
    client?: ApiV1ServiceAdminMinistraCompareChannelsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraCompareChannelsCreate["response"], ApiV1ServiceAdminMinistraCompareChannelsCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraCompareChannelsCreate["response"], ApiV1ServiceAdminMinistraCompareChannelsCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminMinistraCompareChannelsCreate["data"], ApiV1ServiceAdminMinistraCompareChannelsCreate["error"], void>({
        method: "post",
        url: `/api/v1/service/admin/ministra/${id}/compare-channels/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
