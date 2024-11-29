import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminTypesListQueryResponse, ApiV1ActionsAdminTypesListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsAdminTypesList"

/**
 * @description Представление для выборки всех типов действий
 * @link /api/v1/actions/admin/types/ */
export async function apiV1ActionsAdminTypesList(
  params?: ApiV1ActionsAdminTypesListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminTypesListQueryResponse>> {
  const res = await client<ApiV1ActionsAdminTypesListQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/types/`,
    params,
    ...options,
  })
  return res
}
