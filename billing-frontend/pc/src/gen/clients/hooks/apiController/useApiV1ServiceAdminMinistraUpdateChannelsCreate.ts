import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraUpdateChannelsCreateMutationResponse,
  ApiV1ServiceAdminMinistraUpdateChannelsCreatePathParams,
  ApiV1ServiceAdminMinistraUpdateChannelsCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraUpdateChannelsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraUpdateChannelsCreateClient = typeof client<ApiV1ServiceAdminMinistraUpdateChannelsCreateMutationResponse, ApiV1ServiceAdminMinistraUpdateChannelsCreate201, never>
type ApiV1ServiceAdminMinistraUpdateChannelsCreate = {
  data: ApiV1ServiceAdminMinistraUpdateChannelsCreateMutationResponse
  error: ApiV1ServiceAdminMinistraUpdateChannelsCreate201
  request: never
  pathParams: ApiV1ServiceAdminMinistraUpdateChannelsCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraUpdateChannelsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraUpdateChannelsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraUpdateChannelsCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **ministra_server_not_found_by_id**Сервер Ministra с указанным ID не обнаружен.* **ministra_server_custom_api_params_empty**Для сервера Ministra не указаны параметры подключения к Custom API.* **ministra_server_custom_api_url_is_incorrect**Для сервера Ministra неверно указан URL подключения к Custom API.
 * @summary Обновление списка жанров и каналов сервера Ministra в соответствии с группами и каналами плейлиста по умолчанию
 * @link /api/v1/service/admin/ministra/:id/update-channels/ */
export function useApiV1ServiceAdminMinistraUpdateChannelsCreate(
  id: ApiV1ServiceAdminMinistraUpdateChannelsCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraUpdateChannelsCreate["response"], ApiV1ServiceAdminMinistraUpdateChannelsCreate["error"], void>
    client?: ApiV1ServiceAdminMinistraUpdateChannelsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraUpdateChannelsCreate["response"], ApiV1ServiceAdminMinistraUpdateChannelsCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraUpdateChannelsCreate["response"], ApiV1ServiceAdminMinistraUpdateChannelsCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminMinistraUpdateChannelsCreate["data"], ApiV1ServiceAdminMinistraUpdateChannelsCreate["error"], void>({
        method: "post",
        url: `/api/v1/service/admin/ministra/${id}/update-channels/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
