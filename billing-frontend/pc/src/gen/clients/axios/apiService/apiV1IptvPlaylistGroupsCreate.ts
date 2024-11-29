import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsCreateMutationRequest,
  ApiV1IptvPlaylistGroupsCreateMutationResponse,
  ApiV1IptvPlaylistGroupsCreatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsCreate"

/**
 * @description Просмотр всех групп каналов в плейлисте, создание новой группы каналов
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/ */
export async function apiV1IptvPlaylistGroupsCreate(
  { playlist_pk }: ApiV1IptvPlaylistGroupsCreatePathParams,
  data: ApiV1IptvPlaylistGroupsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsCreateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsCreateMutationResponse, ApiV1IptvPlaylistGroupsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/`,
    data,
    ...options,
  })
  return res
}
