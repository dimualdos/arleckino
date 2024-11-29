import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsPartialUpdateClient = typeof client<ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse, never, ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest>
type ApiV1IptvPlaylistGroupsPartialUpdate = {
  data: ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsPartialUpdateClient>>
  }
}
/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export function useApiV1IptvPlaylistGroupsPartialUpdate(
  id: ApiV1IptvPlaylistGroupsPartialUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsPartialUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsPartialUpdate["response"], ApiV1IptvPlaylistGroupsPartialUpdate["error"], ApiV1IptvPlaylistGroupsPartialUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsPartialUpdate["response"], ApiV1IptvPlaylistGroupsPartialUpdate["error"], ApiV1IptvPlaylistGroupsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsPartialUpdate["response"], ApiV1IptvPlaylistGroupsPartialUpdate["error"], ApiV1IptvPlaylistGroupsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsPartialUpdate["data"], ApiV1IptvPlaylistGroupsPartialUpdate["error"], ApiV1IptvPlaylistGroupsPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
