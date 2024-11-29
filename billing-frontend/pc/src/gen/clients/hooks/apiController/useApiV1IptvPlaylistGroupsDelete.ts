import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsDeleteMutationResponse,
  ApiV1IptvPlaylistGroupsDeletePathParams,
  ApiV1IptvPlaylistGroupsDelete204,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsDeleteClient = typeof client<ApiV1IptvPlaylistGroupsDeleteMutationResponse, ApiV1IptvPlaylistGroupsDelete204, never>
type ApiV1IptvPlaylistGroupsDelete = {
  data: ApiV1IptvPlaylistGroupsDeleteMutationResponse
  error: ApiV1IptvPlaylistGroupsDelete204
  request: never
  pathParams: ApiV1IptvPlaylistGroupsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsDeleteClient>>
  }
}
/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export function useApiV1IptvPlaylistGroupsDelete(
  id: ApiV1IptvPlaylistGroupsDeletePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsDeletePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsDelete["response"], ApiV1IptvPlaylistGroupsDelete["error"], void>
    client?: ApiV1IptvPlaylistGroupsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsDelete["response"], ApiV1IptvPlaylistGroupsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsDelete["response"], ApiV1IptvPlaylistGroupsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvPlaylistGroupsDelete["data"], ApiV1IptvPlaylistGroupsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
