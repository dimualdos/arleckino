import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1PermissionsAdminGroupsReadQueryResponse, ApiV1PermissionsAdminGroupsReadPathParams } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsRead"

/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export async function apiV1PermissionsAdminGroupsRead(
  { id }: ApiV1PermissionsAdminGroupsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsReadQueryResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsReadQueryResponse>({
    method: "get",
    url: `/api/v1/permissions/admin/groups/${id}/`,
    ...options,
  })
  return res
}
