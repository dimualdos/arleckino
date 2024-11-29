import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1PermissionsAdminGroupsUsersDeleteMutationResponse, ApiV1PermissionsAdminGroupsUsersDeletePathParams } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUsersDelete"

/**
 * @description .
 * @summary Удаление пользователя из группы
 * @link /api/v1/permissions/admin/groups/:group_id/users/:id/ */
export async function apiV1PermissionsAdminGroupsUsersDelete(
  { group_id, id }: ApiV1PermissionsAdminGroupsUsersDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsUsersDeleteMutationResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsUsersDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/permissions/admin/groups/${group_id}/users/${id}/`,
    ...options,
  })
  return res
}
