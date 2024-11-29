import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminUserReadQueryResponse, ApiV1UserAdminUserReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserRead"

/**
 * @description .
 * @summary Просмотр и изменение информации о пользователе администратором
 * @link /api/v1/user/admin/user/:id */
export async function apiV1UserAdminUserRead(
  { id }: ApiV1UserAdminUserReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserReadQueryResponse>> {
  const res = await client<ApiV1UserAdminUserReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}`,
    ...options,
  })
  return res
}
