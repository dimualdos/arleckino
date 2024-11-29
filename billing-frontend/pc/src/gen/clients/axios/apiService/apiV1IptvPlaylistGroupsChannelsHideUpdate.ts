import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsHideUpdate"

/**
 * @description Скрыть/отобразить канал группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/hide */
export async function apiV1IptvPlaylistGroupsChannelsHideUpdate(
  { group_pk, id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams,
  data?: ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse, ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${group_pk}/channels/${id}/hide`,
    data,
    ...options,
  })
  return res
}

/**
 * @description Скрыть/Отобразить все каналы группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/channels/hide/ */
export async function apiV1IptvPlaylistGroupsChannelsHideUpdateAlt(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsHideUpdatePathParams,
  data?: ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponse, ApiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/channels/hide/`,
    data,
    ...options,
  })
  return res
}
