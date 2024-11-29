import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1PermissionsAdminGroupsListQueryResponse, ApiV1PermissionsAdminGroupsListQueryParams } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsList"

/**
 * @description Список сообщений **message_type**:* **admin_group_name_already_exists**Группа пользователей с указанным именем {} уже существует, укажите другое имя.
 * @summary Список групп пользователей, создание новой группы
 * @link /api/v1/permissions/admin/groups/ */
export async function apiV1PermissionsAdminGroupsList(
  params?: ApiV1PermissionsAdminGroupsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsListQueryResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsListQueryResponse>({
    method: "get",
    url: `/api/v1/permissions/admin/groups/`,
    params,
    ...options,
  })
  return res
}
