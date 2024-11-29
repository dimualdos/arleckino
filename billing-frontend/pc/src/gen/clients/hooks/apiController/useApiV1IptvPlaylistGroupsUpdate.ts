import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsUpdateClient = typeof client<ApiV1IptvPlaylistGroupsUpdateMutationResponse, never, ApiV1IptvPlaylistGroupsUpdateMutationRequest>
type ApiV1IptvPlaylistGroupsUpdate = {
  data: ApiV1IptvPlaylistGroupsUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsUpdateClient>>
  }
}
/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export function useApiV1IptvPlaylistGroupsUpdate(
  id: ApiV1IptvPlaylistGroupsUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsUpdate["response"], ApiV1IptvPlaylistGroupsUpdate["error"], ApiV1IptvPlaylistGroupsUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsUpdate["response"], ApiV1IptvPlaylistGroupsUpdate["error"], ApiV1IptvPlaylistGroupsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsUpdate["response"], ApiV1IptvPlaylistGroupsUpdate["error"], ApiV1IptvPlaylistGroupsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsUpdate["data"], ApiV1IptvPlaylistGroupsUpdate["error"], ApiV1IptvPlaylistGroupsUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
