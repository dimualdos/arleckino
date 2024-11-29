import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

/**
 * @description Скрыть/отобразить канал группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/hide */
export function useApiV1IptvPlaylistGroupsChannelsHidePartialUpdate(
  groupPk: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams["group_pk"],
  id: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["response"],
      ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
      ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
    >
    client?: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["response"],
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["response"],
    ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
    ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["data"],
        ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
        ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${groupPk}/channels/${id}/hide`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}

type ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateClient = typeof client<
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse,
  never,
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest
>
type ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate = {
  data: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse
  error: never
  request: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest
  pathParams: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateClient>>
  }
}
/**
 * @description Скрыть/Отобразить все каналы группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/channels/hide/ */
export function useApiV1IptvPlaylistGroupsChannelsHidePartialUpdateAlt(
  id: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams["id"],
  playlistPk: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams["playlist_pk"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["response"],
      ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
      ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
    >
    client?: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["response"],
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["response"],
    ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
    ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["data"],
        ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["error"],
        ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/iptv/playlist/${playlistPk}/groups/${id}/channels/hide/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
