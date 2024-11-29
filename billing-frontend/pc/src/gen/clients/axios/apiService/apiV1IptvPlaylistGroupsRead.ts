import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistGroupsReadQueryResponse, ApiV1IptvPlaylistGroupsReadPathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsRead"

/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export async function apiV1IptvPlaylistGroupsRead(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsReadQueryResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsReadQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/`,
    ...options,
  })
  return res
}
