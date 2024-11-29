import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsUserLogsGroupReadQueryResponse,
  ApiV1ActionsUserLogsGroupReadPathParams,
  ApiV1ActionsUserLogsGroupReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsUserLogsGroupRead"

/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение логов указанной группы активного пользователя
 * @link /api/v1/actions/user/logs/group/:groupId */
export async function apiV1ActionsUserLogsGroupRead(
  { groupId }: ApiV1ActionsUserLogsGroupReadPathParams,
  params?: ApiV1ActionsUserLogsGroupReadQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsUserLogsGroupReadQueryResponse>> {
  const res = await client<ApiV1ActionsUserLogsGroupReadQueryResponse>({
    method: "get",
    url: `/api/v1/actions/user/logs/group/${groupId}`,
    params,
    ...options,
  })
  return res
}
