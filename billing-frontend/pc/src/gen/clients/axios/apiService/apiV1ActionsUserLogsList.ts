import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsUserLogsListQueryResponse, ApiV1ActionsUserLogsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsUserLogsList"

/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение всех логов активного пользователя
 * @link /api/v1/actions/user/logs/ */
export async function apiV1ActionsUserLogsList(
  params?: ApiV1ActionsUserLogsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsUserLogsListQueryResponse>> {
  const res = await client<ApiV1ActionsUserLogsListQueryResponse>({
    method: "get",
    url: `/api/v1/actions/user/logs/`,
    params,
    ...options,
  })
  return res
}
