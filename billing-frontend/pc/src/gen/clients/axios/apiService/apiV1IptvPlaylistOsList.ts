import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvPlaylistOsListQueryResponse, ApiV1IptvPlaylistOsListQueryParams } from "../../../models/ts/apiController/ApiV1IptvPlaylistOsList"

/**
 * @link /api/v1/iptv/playlist-os/ */
export async function apiV1IptvPlaylistOsList(
  params?: ApiV1IptvPlaylistOsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistOsListQueryResponse>> {
  const res = await client<ApiV1IptvPlaylistOsListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/playlist-os/`,
    params,
    ...options,
  })
  return res
}
