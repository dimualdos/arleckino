import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1PermissionsAdminGroupsDeleteMutationResponse, ApiV1PermissionsAdminGroupsDeletePathParams } from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsDelete"

/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export async function apiV1PermissionsAdminGroupsDelete(
  { id }: ApiV1PermissionsAdminGroupsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsDeleteMutationResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/permissions/admin/groups/${id}/`,
    ...options,
  })
  return res
}
