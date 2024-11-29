import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminGroupsReadQueryResponse, ApiV1ActionsAdminGroupsReadPathParams } from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsRead"

/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export async function apiV1ActionsAdminGroupsRead(
  { id }: ApiV1ActionsAdminGroupsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminGroupsReadQueryResponse>> {
  const res = await client<ApiV1ActionsAdminGroupsReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/groups/${id}/`,
    ...options,
  })
  return res
}
