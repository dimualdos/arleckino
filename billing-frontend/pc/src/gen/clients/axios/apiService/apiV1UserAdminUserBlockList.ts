import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserBlockListQueryResponse,
  ApiV1UserAdminUserBlockListPathParams,
  ApiV1UserAdminUserBlockListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockList"

/**
 * @description Список сообщений **message_type**:* **user_actual_block_already_exists**Актуальная блокировка пользователя уже существует.* **user_block_start_date_is_less_today**Указанная дата начала блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.
 * @summary Просмотр списка блокировок пользователя и создание новой.
 * @link /api/v1/user/admin/user/:id/block */
export async function apiV1UserAdminUserBlockList(
  { id }: ApiV1UserAdminUserBlockListPathParams,
  params?: ApiV1UserAdminUserBlockListQueryParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserBlockListQueryResponse>> {
  const res = await client<ApiV1UserAdminUserBlockListQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/block`,
    params,
    ...options,
  })
  return res
}
