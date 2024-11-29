import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsCreateMutationRequest,
  ApiV1IptvPlaylistGroupsCreateMutationResponse,
  ApiV1IptvPlaylistGroupsCreatePathParams,
  ApiV1IptvPlaylistGroupsCreate201,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistGroupsCreateClient = typeof client<ApiV1IptvPlaylistGroupsCreateMutationResponse, ApiV1IptvPlaylistGroupsCreate201, ApiV1IptvPlaylistGroupsCreateMutationRequest>
type ApiV1IptvPlaylistGroupsCreate = {
  data: ApiV1IptvPlaylistGroupsCreateMutationResponse
  error: ApiV1IptvPlaylistGroupsCreate201
  request: ApiV1IptvPlaylistGroupsCreateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsCreateClient>>
  }
}
/**
 * @description Просмотр всех групп каналов в плейлисте, создание новой группы каналов
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/ */
export function useApiV1IptvPlaylistGroupsCreate(
  playlistPk: ApiV1IptvPlaylistGroupsCreatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsCreate["response"], ApiV1IptvPlaylistGroupsCreate["error"], ApiV1IptvPlaylistGroupsCreate["request"]>
    client?: ApiV1IptvPlaylistGroupsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsCreate["response"], ApiV1IptvPlaylistGroupsCreate["error"], ApiV1IptvPlaylistGroupsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsCreate["response"], ApiV1IptvPlaylistGroupsCreate["error"], ApiV1IptvPlaylistGroupsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsCreate["data"], ApiV1IptvPlaylistGroupsCreate["error"], ApiV1IptvPlaylistGroupsCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
