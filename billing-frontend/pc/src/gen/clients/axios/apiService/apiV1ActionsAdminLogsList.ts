import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminLogsListQueryResponse, ApiV1ActionsAdminLogsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsAdminLogsList"

/**
 * @description Представление для выборки всех логов
 * @link /api/v1/actions/admin/logs/ */
export async function apiV1ActionsAdminLogsList(
  params?: ApiV1ActionsAdminLogsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminLogsListQueryResponse>> {
  const res = await client<ApiV1ActionsAdminLogsListQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/logs/`,
    params,
    ...options,
  })
  return res
}
