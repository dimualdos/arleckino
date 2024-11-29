import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfilePartialUpdateMutationRequest, ApiV1UserProfilePartialUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfilePartialUpdate"

/**
 * @description Список сообщений **message_type**:* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Изменение данных профиля пользователя
 * @link /api/v1/user/profile/ */
export async function apiV1UserProfilePartialUpdate(
  data?: ApiV1UserProfilePartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfilePartialUpdateMutationResponse>> {
  const res = await client<ApiV1UserProfilePartialUpdateMutationResponse, ApiV1UserProfilePartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/user/profile/`,
    data,
    ...options,
  })
  return res
}
