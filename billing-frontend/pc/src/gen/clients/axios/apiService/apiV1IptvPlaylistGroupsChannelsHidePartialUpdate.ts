import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsChannelsHidePartialUpdate"

/**
 * @description Скрыть/отобразить канал группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:group_pk/channels/:id/hide */
export async function apiV1IptvPlaylistGroupsChannelsHidePartialUpdate(
  { group_pk, id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams,
  data?: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse, ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${group_pk}/channels/${id}/hide`,
    data,
    ...options,
  })
  return res
}

/**
 * @description Скрыть/Отобразить все каналы группы в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/channels/hide/ */
export async function apiV1IptvPlaylistGroupsChannelsHidePartialUpdateAlt(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParams,
  data?: ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponse, ApiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/channels/hide/`,
    data,
    ...options,
  })
  return res
}
