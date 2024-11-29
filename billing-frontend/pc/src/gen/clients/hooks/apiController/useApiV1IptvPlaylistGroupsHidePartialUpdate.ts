import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams,
  ApiV1IptvPlaylistGroupsHidePartialUpdatePathParamsAlt,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsHidePartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

/**
 * @description Скрыть/Отобразить все группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/hide/ */
export function useApiV1IptvPlaylistGroupsHidePartialUpdate(
  playlistPk: ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsHidePartialUpdate["response"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsHidePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsHidePartialUpdate["response"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsHidePartialUpdate["response"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsHidePartialUpdate["data"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/hide/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}

type ApiV1IptvPlaylistGroupsHidePartialUpdateClient = typeof client<ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse, never, ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest>
type ApiV1IptvPlaylistGroupsHidePartialUpdate = {
  data: ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsHidePartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsHidePartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsHidePartialUpdateClient>>
  }
}
/**
 * @description Скрыть/Отобразить группу каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/hide/ */
export function useApiV1IptvPlaylistGroupsHidePartialUpdateAlt(
  id: ApiV1IptvPlaylistGroupsHidePartialUpdatePathParamsAlt["id"],
  playlistPk: ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsHidePartialUpdate["response"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsHidePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsHidePartialUpdate["response"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsHidePartialUpdate["response"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsHidePartialUpdate["data"], ApiV1IptvPlaylistGroupsHidePartialUpdate["error"], ApiV1IptvPlaylistGroupsHidePartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/hide/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
