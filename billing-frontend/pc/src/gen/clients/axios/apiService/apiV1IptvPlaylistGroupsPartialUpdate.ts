import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest,
  ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse,
  ApiV1IptvPlaylistGroupsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistGroupsPartialUpdate"

/**
 * @description Просмотр, редактирование и удаление группы каналов в плейлисте
 * @link /api/v1/iptv/playlist/:playlist_pk/groups/:id/ */
export async function apiV1IptvPlaylistGroupsPartialUpdate(
  { id, playlist_pk }: ApiV1IptvPlaylistGroupsPartialUpdatePathParams,
  data: ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistGroupsPartialUpdateMutationResponse, ApiV1IptvPlaylistGroupsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/iptv/playlist/${playlist_pk}/groups/${id}/`,
    data,
    ...options,
  })
  return res
}
