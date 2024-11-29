import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserBlockCreateMutationRequest,
  ApiV1UserAdminUserBlockCreateMutationResponse,
  ApiV1UserAdminUserBlockCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserBlockCreate"

/**
 * @description Список сообщений **message_type**:* **user_actual_block_already_exists**Актуальная блокировка пользователя уже существует.* **user_block_start_date_is_less_today**Указанная дата начала блокировки пользователя {} меньше текущей даты.* **user_block_expires_is_less_or_equal_to_start_date**Указанная дата окончания блокировки пользователя {} меньше или равна дате начала {}.
 * @summary Просмотр списка блокировок пользователя и создание новой.
 * @link /api/v1/user/admin/user/:id/block */
export async function apiV1UserAdminUserBlockCreate(
  { id }: ApiV1UserAdminUserBlockCreatePathParams,
  data: ApiV1UserAdminUserBlockCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserBlockCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserBlockCreateMutationResponse, ApiV1UserAdminUserBlockCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/block`,
    data,
    ...options,
  })
  return res
}
