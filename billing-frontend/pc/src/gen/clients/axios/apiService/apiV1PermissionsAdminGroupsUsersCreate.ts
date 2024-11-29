import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1PermissionsAdminGroupsUsersCreateMutationRequest,
  ApiV1PermissionsAdminGroupsUsersCreateMutationResponse,
  ApiV1PermissionsAdminGroupsUsersCreatePathParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUsersCreate"

/**
 * @description .
 * @summary Список пользователей группы, добавление пользователя в группу
 * @link /api/v1/permissions/admin/groups/:group_id/users/ */
export async function apiV1PermissionsAdminGroupsUsersCreate(
  { group_id }: ApiV1PermissionsAdminGroupsUsersCreatePathParams,
  data: ApiV1PermissionsAdminGroupsUsersCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsUsersCreateMutationResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsUsersCreateMutationResponse, ApiV1PermissionsAdminGroupsUsersCreateMutationRequest>({
    method: "post",
    url: `/api/v1/permissions/admin/groups/${group_id}/users/`,
    data,
    ...options,
  })
  return res
}
