import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1PermissionsAdminGroupsCreateMutationRequest, ApiV1PermissionsAdminGroupsCreateMutationResponse } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsCreate"

/**
 * @description Список сообщений **message_type**:* **admin_group_name_already_exists**Группа пользователей с указанным именем {} уже существует, укажите другое имя.
 * @summary Список групп пользователей, создание новой группы
 * @link /api/v1/permissions/admin/groups/ */
export async function apiV1PermissionsAdminGroupsCreate(
  data: ApiV1PermissionsAdminGroupsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsCreateMutationResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsCreateMutationResponse, ApiV1PermissionsAdminGroupsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/permissions/admin/groups/`,
    data,
    ...options,
  })
  return res
}
