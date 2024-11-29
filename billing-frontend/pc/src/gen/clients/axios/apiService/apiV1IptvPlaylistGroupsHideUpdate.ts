import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsHideUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsHideUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsHideUpdatePathParams,
  ApiV1IptvPlaylistGroupsHideUpdatePathParamsAlt,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsHideUpdate"

/**
 * @description Скрыть/Отобразить все группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/hide/ */
export async function apiV1IptvPlaylistGroupsHideUpdate(
  { playlist_pk }: ApiV1IptvPlaylistGroupsHideUpdatePathParams,
  data?: ApiV1IptvPlaylistGroupsHideUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsHideUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsHideUpdateMutationResponse, ApiV1IptvPlaylistGroupsHideUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/hide/`,
    data,
    ...options,
  })
  return res
}

/**
 * @description Скрыть/Отобразить группу каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/hide/ */
export async function apiV1IptvPlaylistGroupsHideUpdateAlt(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsHideUpdatePathParamsAlt,
  data?: ApiV1IptvPlaylistGroupsHideUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsHideUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsHideUpdateMutationResponse, ApiV1IptvPlaylistGroupsHideUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/hide/`,
    data,
    ...options,
  })
  return res
}
