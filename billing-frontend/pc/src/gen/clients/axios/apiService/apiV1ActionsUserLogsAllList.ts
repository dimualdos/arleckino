import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsUserLogsAllListQueryResponse, ApiV1ActionsUserLogsAllListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsUserLogsAllList"

/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение всех логов активного пользователя без постраничной разбивки
 * @link /api/v1/actions/user/logs/all/ */
export async function apiV1ActionsUserLogsAllList(
  params?: ApiV1ActionsUserLogsAllListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsUserLogsAllListQueryResponse>> {
  const res = await client<ApiV1ActionsUserLogsAllListQueryResponse>({
    method: "get",
    url: `/api/v1/actions/user/logs/all/`,
    params,
    ...options,
  })
  return res
}
