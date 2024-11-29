import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsHideUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsHideUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsHideUpdatePathParams,
  ApiV1IptvPlaylistGroupsHideUpdatePathParamsAlt,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsHideUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

/**
 * @description Скрыть/Отобразить все группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/hide/ */
export function useApiV1IptvPlaylistGroupsHideUpdate(
  playlistPk: ApiV1IptvPlaylistGroupsHideUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsHideUpdate["response"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsHideUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsHideUpdate["response"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsHideUpdate["response"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsHideUpdate["data"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/hide/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}

type ApiV1IptvPlaylistGroupsHideUpdateClient = typeof client<ApiV1IptvPlaylistGroupsHideUpdateMutationResponse, never, ApiV1IptvPlaylistGroupsHideUpdateMutationRequest>
type ApiV1IptvPlaylistGroupsHideUpdate = {
  data: ApiV1IptvPlaylistGroupsHideUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsHideUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsHideUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsHideUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsHideUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsHideUpdateClient>>
  }
}
/**
 * @description Скрыть/Отобразить группу каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/hide/ */
export function useApiV1IptvPlaylistGroupsHideUpdateAlt(
  id: ApiV1IptvPlaylistGroupsHideUpdatePathParamsAlt["id"],
  playlistPk: ApiV1IptvPlaylistGroupsHideUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsHideUpdate["response"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsHideUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsHideUpdate["response"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsHideUpdate["response"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsHideUpdate["data"], ApiV1IptvPlaylistGroupsHideUpdate["error"], ApiV1IptvPlaylistGroupsHideUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/hide/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
