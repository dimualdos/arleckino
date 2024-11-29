import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminLogsUserReadQueryResponse,
  ApiV1ActionsAdminLogsUserReadPathParams,
  ApiV1ActionsAdminLogsUserReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsUserRead"

/**
 * @description Представление для выборки логов конкретного пользователя
 * @link /api/v1/actions/admin/logs/user/:userId */
export async function apiV1ActionsAdminLogsUserRead(
  { userId }: ApiV1ActionsAdminLogsUserReadPathParams,
  params?: ApiV1ActionsAdminLogsUserReadQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminLogsUserReadQueryResponse>> {
  const res = await client<ApiV1ActionsAdminLogsUserReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/admin/logs/user/${userId}`,
    params,
    ...options,
  })
  return res
}
