import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams,
  ApiV1IptvPlaylistGroupsHidePartialUpdatePathParamsAlt,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsHidePartialUpdate"

/**
 * @description Скрыть/Отобразить все группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/hide/ */
export async function apiV1IptvPlaylistGroupsHidePartialUpdate(
  { playlist_pk }: ApiV1IptvPlaylistGroupsHidePartialUpdatePathParams,
  data?: ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse, ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/hide/`,
    data,
    ...options,
  })
  return res
}

/**
 * @description Скрыть/Отобразить группу каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/hide/ */
export async function apiV1IptvPlaylistGroupsHidePartialUpdateAlt(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsHidePartialUpdatePathParamsAlt,
  data?: ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsHidePartialUpdateMutationResponse, ApiV1IptvPlaylistGroupsHidePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/hide/`,
    data,
    ...options,
  })
  return res
}
