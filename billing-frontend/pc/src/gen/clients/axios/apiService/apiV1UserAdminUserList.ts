import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminUserListQueryResponse, ApiV1UserAdminUserListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminUserList"

/**
 * @description .
 * @summary Список пользователей
 * @link /api/v1/user/admin/user */
export async function apiV1UserAdminUserList(
  params?: ApiV1UserAdminUserListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user`,
    params,
    ...options,
  })
  return res
}
