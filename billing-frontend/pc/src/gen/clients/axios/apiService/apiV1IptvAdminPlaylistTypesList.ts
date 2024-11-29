import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1IptvAdminPlaylistTypesListQueryResponse, ApiV1IptvAdminPlaylistTypesListQueryParams } from "../../../models/ts/apiController/ApiV1IptvAdminPlaylistTypesList"

/**
 * @link /api/v1/iptv/admin/playlist-types/ */
export async function apiV1IptvAdminPlaylistTypesList(
  params?: ApiV1IptvAdminPlaylistTypesListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvAdminPlaylistTypesListQueryResponse>> {
  const res = await client<ApiV1IptvAdminPlaylistTypesListQueryResponse>({
    method: "get",
    url: `/api/v1/iptv/admin/playlist-types/`,
    params,
    ...options,
  })
  return res
}
