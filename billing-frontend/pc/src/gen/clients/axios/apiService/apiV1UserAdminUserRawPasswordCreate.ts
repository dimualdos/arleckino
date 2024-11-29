import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserRawPasswordCreateMutationRequest,
  ApiV1UserAdminUserRawPasswordCreateMutationResponse,
  ApiV1UserAdminUserRawPasswordCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserRawPasswordCreate"

/**
 * @description Список сообщений **message_type**:* **user_raw_password_is_empty**Не удалось получить пароль пользователя.* **raw_password_decode_pin_invalid**Неверно указан пин-код для декодирования пароля пользователя, попытка {} из {}.* **raw_password_decode_pin_attempts_count_is_exhausted**Исчерпано количество повторных попыток ввода пин-код ({} из {}) для декодирования пароля пользователя в сутки.Время блокировки истекает в {}.
 * @summary Получение пароля пользователя администратором
 * @link /api/v1/user/admin/user/:id/raw-password/ */
export async function apiV1UserAdminUserRawPasswordCreate(
  { id }: ApiV1UserAdminUserRawPasswordCreatePathParams,
  data: ApiV1UserAdminUserRawPasswordCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserRawPasswordCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserRawPasswordCreateMutationResponse, ApiV1UserAdminUserRawPasswordCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/raw-password/`,
    data,
    ...options,
  })
  return res
}
