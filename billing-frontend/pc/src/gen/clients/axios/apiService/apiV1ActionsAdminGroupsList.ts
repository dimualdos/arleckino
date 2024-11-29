import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminGroupsListQueryResponse, ApiV1ActionsAdminGroupsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsList"

/**
 * @description Представление для выборки всех групп логов
 * @link /api/v1/actions/admin/groups */
export async function apiV1ActionsAdminGroupsList(
  params?: ApiV1ActionsAdminGroupsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminGroupsListQueryResponse>> {
  const res = await client<ApiV1ActionsAdminGroupsListQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/groups`,
    params,
    ...options,
  })
  return res
}
