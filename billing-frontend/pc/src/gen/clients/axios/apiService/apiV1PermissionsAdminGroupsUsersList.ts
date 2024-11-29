import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1PermissionsAdminGroupsUsersListQueryResponse,
  ApiV1PermissionsAdminGroupsUsersListPathParams,
  ApiV1PermissionsAdminGroupsUsersListQueryParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUsersList"

/**
 * @description .
 * @summary Список пользователей группы, добавление пользователя в группу
 * @link /api/v1/permissions/admin/groups/:group_id/users/ */
export async function apiV1PermissionsAdminGroupsUsersList(
  { group_id }: ApiV1PermissionsAdminGroupsUsersListPathParams,
  params?: ApiV1PermissionsAdminGroupsUsersListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsUsersListQueryResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsUsersListQueryResponse>({
    method: "get",
    url: `/api/v1/permissions/admin/groups/${group_id}/users/`,
    params,
    ...options,
  })
  return res
}
