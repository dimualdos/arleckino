import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistPartialUpdateMutationRequest,
  ApiV1IptvPlaylistPartialUpdateMutationResponse,
  ApiV1IptvPlaylistPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistPartialUpdateClient = typeof client<ApiV1IptvPlaylistPartialUpdateMutationResponse, never, ApiV1IptvPlaylistPartialUpdateMutationRequest>
type ApiV1IptvPlaylistPartialUpdate = {
  data: ApiV1IptvPlaylistPartialUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistPartialUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **playlist_title_already_exists**Плейлист с указанным именем уже существует.
 * @summary Просмотр, редактирование и удаление плейлиста
 * @link /api/v1/iptv/playlist/:id/ */
export function useApiV1IptvPlaylistPartialUpdate(
  id: ApiV1IptvPlaylistPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistPartialUpdate["response"], ApiV1IptvPlaylistPartialUpdate["error"], ApiV1IptvPlaylistPartialUpdate["request"]>
    client?: ApiV1IptvPlaylistPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistPartialUpdate["response"], ApiV1IptvPlaylistPartialUpdate["error"], ApiV1IptvPlaylistPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistPartialUpdate["response"], ApiV1IptvPlaylistPartialUpdate["error"], ApiV1IptvPlaylistPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistPartialUpdate["data"], ApiV1IptvPlaylistPartialUpdate["error"], ApiV1IptvPlaylistPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/iptv/playlist/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
