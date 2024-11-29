import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminGroupsDeleteMutationResponse, ApiV1ActionsAdminGroupsDeletePathParams } from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsDelete"

/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export async function apiV1ActionsAdminGroupsDelete(
  { id }: ApiV1ActionsAdminGroupsDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminGroupsDeleteMutationResponse>> {
  const res = await client<ApiV1ActionsAdminGroupsDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/actions/admin/groups/${id}/`,
    ...options,
  })
  return res
}
