import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest,
  ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse,
  ApiV1PermissionsAdminGroupsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1PermissionsAdminGroupsPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение и удаление группы пользователей
 * @link /api/v1/permissions/admin/groups/:id/ */
export async function apiV1PermissionsAdminGroupsPartialUpdate(
  { id }: ApiV1PermissionsAdminGroupsPartialUpdatePathParams,
  data: ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1PermissionsAdminGroupsPartialUpdateMutationResponse, ApiV1PermissionsAdminGroupsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/permissions/admin/groups/${id}/`,
    data,
    ...options,
  })
  return res
}
