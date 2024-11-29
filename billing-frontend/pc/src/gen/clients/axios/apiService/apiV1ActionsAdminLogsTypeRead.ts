import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminLogsTypeReadQueryResponse,
  ApiV1ActionsAdminLogsTypeReadPathParams,
  ApiV1ActionsAdminLogsTypeReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsTypeRead"

/**
 * @description Представление для выборки логов конкретного типа
 * @link /api/v1/actions/admin/logs/type/:actionTypeId */
export async function apiV1ActionsAdminLogsTypeRead(
  { actionTypeId }: ApiV1ActionsAdminLogsTypeReadPathParams,
  params?: ApiV1ActionsAdminLogsTypeReadQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminLogsTypeReadQueryResponse>> {
  const res = await client<ApiV1ActionsAdminLogsTypeReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/logs/type/${actionTypeId}`,
    params,
    ...options,
  })
  return res
}
