import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsHideUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

/**
 * @description Скрыть/отобразить канал группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/hide */
export function useApiV1IptvPlaylistGroupsChannelsHideUpdate(
  groupPk: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams["group_pk"],
  id: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsChannelsHideUpdate["response"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsChannelsHideUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsChannelsHideUpdate["response"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsChannelsHideUpdate["response"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsChannelsHideUpdate["data"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${groupPk}/channels/${id}/hide`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}

type ApiV1IptvPlaylistGroupsChannelsHideUpdateClient = typeof client<ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse, never, ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest>
type ApiV1IptvPlaylistGroupsChannelsHideUpdate = {
  data: ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsHideUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsChannelsHideUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsHideUpdateClient>>
  }
}
/**
 * @description Скрыть/Отобразить все каналы группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/channels/hide/ */
export function useApiV1IptvPlaylistGroupsChannelsHideUpdateAlt(
  id: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistGroupsChannelsHideUpdate["response"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]>
    client?: ApiV1IptvPlaylistGroupsChannelsHideUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistGroupsChannelsHideUpdate["response"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistGroupsChannelsHideUpdate["response"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistGroupsChannelsHideUpdate["data"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["error"], ApiV1IptvPlaylistGroupsChannelsHideUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/channels/hide/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
