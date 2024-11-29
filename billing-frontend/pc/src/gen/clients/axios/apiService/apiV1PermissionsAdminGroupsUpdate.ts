import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1PermissionsAdminGroupsUpdateMutationRequest,
  ApiV1PermissionsAdminGroupsUpdateMutationResponse,
  ApiV1PermissionsAdminGroupsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsUpdate"

/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export async function apiV1PermissionsAdminGroupsUpdate(
  { id }: ApiV1PermissionsAdminGroupsUpdatePathParams,
  data: ApiV1PermissionsAdminGroupsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsUpdateMutationResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsUpdateMutationResponse, ApiV1PermissionsAdminGroupsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/permissions/admin/groups/${id}/`,
    data,
    ...options,
  })
  return res
}
