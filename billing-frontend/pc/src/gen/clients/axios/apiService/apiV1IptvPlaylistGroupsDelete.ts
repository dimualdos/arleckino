import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistGroupsDeleteMutationResponse, ApiV1IptvPlaylistGroupsDeletePathParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsDelete"

/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export async function apiV1IptvPlaylistGroupsDelete(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsDeleteMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/`,
    ...options,
  })
  return res
}
