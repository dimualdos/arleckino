import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminLogsTypeStatusReadQueryResponse,
  ApiV1ActionsAdminLogsTypeStatusReadPathParams,
  ApiV1ActionsAdminLogsTypeStatusReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsTypeStatusRead"

/**
 * @description Представление для выборки логов конкретного типа и статуса
 * @link /api/v1/actions/admin/logs/type/:actionTypeId/status/:actionStatusTypeId */
export async function apiV1ActionsAdminLogsTypeStatusRead(
  { actionStatusTypeId, actionTypeId }: ApiV1ActionsAdminLogsTypeStatusReadPathParams,
  params?: ApiV1ActionsAdminLogsTypeStatusReadQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminLogsTypeStatusReadQueryResponse>> {
  const res = await client<ApiV1ActionsAdminLogsTypeStatusReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/logs/type/${actionTypeId}/status/${actionStatusTypeId}`,
    params,
    ...options,
  })
  return res
}
