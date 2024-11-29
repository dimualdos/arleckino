import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserBlockPartialUpdateMutationRequest,
  ApiV1UserAdminUserBlockPartialUpdateMutationResponse,
  ApiV1UserAdminUserBlockPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **user_actual_block_expires_equal_to_current**Указанная дата окончания актуальной блокировки пользователя {} совпадает с текущей {}.* **user_actual_block_expires_is_less_today**Указанная дата окончания актуальной блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.* **user_block_already_cancelled**Блокировка пользователя с указанным ID {} уже отменена, изменение невозможно.* **user_block_is_not_actual**Указанный ID блокировки пользователя {} не совпадает с ID актуальной блокировки {}.
 * @summary АПИ представление блокировки с указанием причины
 * @link /api/v1/user/admin/user/:id/block/:block_pk */
export async function apiV1UserAdminUserBlockPartialUpdate(
  { block_pk, id }: ApiV1UserAdminUserBlockPartialUpdatePathParams,
  data: ApiV1UserAdminUserBlockPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserBlockPartialUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserBlockPartialUpdateMutationResponse, ApiV1UserAdminUserBlockPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/user/admin/user/${id}/block/${block_pk}`,
    data,
    ...options,
  })
  return res
}
