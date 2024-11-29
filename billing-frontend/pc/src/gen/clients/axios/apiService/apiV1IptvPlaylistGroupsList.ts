import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsListQueryResponse,
  ApiV1IptvPlaylistGroupsListPathParams,
  ApiV1IptvPlaylistGroupsListQueryParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsList"

/**
 * @description Просмотр всех групп каналов в плейлисте, создание новой группы каналов
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/ */
export async function apiV1IptvPlaylistGroupsList(
  { playlist_pk }: ApiV1IptvPlaylistGroupsListPathParams,
  params?: ApiV1IptvPlaylistGroupsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsListQueryResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/`,
    params,
    ...options,
  })
  return res
}
