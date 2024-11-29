import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistChannelsListQueryResponse } from "../../../models/ts/apiController/ApiV1IptvPlaylistChannelsList"

/**
 * @description Просмотр всех каналов в плейлисте
 * @link /api/v1/iptv/playlist/channels/ */
export async function apiV1IptvPlaylistChannelsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1IptvPlaylistChannelsListQueryResponse>> {
  const res = await client<ApiV1IptvPlaylistChannelsListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/playlist/channels/`,
    ...options,
  })
  return res
}
