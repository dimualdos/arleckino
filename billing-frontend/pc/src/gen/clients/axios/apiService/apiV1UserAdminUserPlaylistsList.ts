import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminUserPlaylistsListQueryResponse, ApiV1UserAdminUserPlaylistsListPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserPlaylistsList"

/**
 * @description .
 * @summary Список плейлистов пользователей
 * @link /api/v1/user/admin/user/:id/playlists */
export async function apiV1UserAdminUserPlaylistsList(
  { id }: ApiV1UserAdminUserPlaylistsListPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserPlaylistsListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserPlaylistsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/playlists`,
    ...options,
  })
  return res
}
