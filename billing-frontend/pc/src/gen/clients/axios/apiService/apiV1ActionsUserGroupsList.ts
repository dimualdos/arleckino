import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsUserGroupsListQueryResponse, ApiV1ActionsUserGroupsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsUserGroupsList"

/**
 * @description Список сообщений **message_type**:* **user_is_blocked**Учетная запись пользователя заблокирована.
 * @summary Получение списка групп логов
 * @link /api/v1/actions/user/groups/ */
export async function apiV1ActionsUserGroupsList(
  params?: ApiV1ActionsUserGroupsListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsUserGroupsListQueryResponse>> {
  const res = await client<ApiV1ActionsUserGroupsListQueryResponse>({
    method: "get",
    url: `/api/v1/actions/user/groups/`,
    params,
    ...options,
  })
  return res
}
