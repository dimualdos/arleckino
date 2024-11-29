import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminTypesReadQueryResponse, ApiV1ActionsAdminTypesReadPathParams } from "../../../models/ts/apiController/ApiV1ActionsAdminTypesRead"

/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export async function apiV1ActionsAdminTypesRead(
  { id }: ApiV1ActionsAdminTypesReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminTypesReadQueryResponse>> {
  const res = await client<ApiV1ActionsAdminTypesReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/types/${id}/`,
    ...options,
  })
  return res
}
