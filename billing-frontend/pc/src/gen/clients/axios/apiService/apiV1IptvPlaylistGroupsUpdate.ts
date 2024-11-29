import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsUpdate"

/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export async function apiV1IptvPlaylistGroupsUpdate(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsUpdatePathParams,
  data: ApiV1IptvPlaylistGroupsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsUpdateMutationResponse, ApiV1IptvPlaylistGroupsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/`,
    data,
    ...options,
  })
  return res
}
