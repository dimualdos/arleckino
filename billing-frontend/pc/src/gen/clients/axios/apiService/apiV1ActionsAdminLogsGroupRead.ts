import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminLogsGroupReadQueryResponse,
  ApiV1ActionsAdminLogsGroupReadPathParams,
  ApiV1ActionsAdminLogsGroupReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsGroupRead"

/**
 * @description Представление для выборки логов конкретной группы
 * @link /api/v1/actions/admin/logs/group/:groupId */
export async function apiV1ActionsAdminLogsGroupRead(
  { groupId }: ApiV1ActionsAdminLogsGroupReadPathParams,
  params?: ApiV1ActionsAdminLogsGroupReadQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminLogsGroupReadQueryResponse>> {
  const res = await client<ApiV1ActionsAdminLogsGroupReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/logs/group/${groupId}`,
    params,
    ...options,
  })
  return res
}
