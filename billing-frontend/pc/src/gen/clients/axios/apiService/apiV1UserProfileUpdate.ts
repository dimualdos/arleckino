import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfileUpdateMutationRequest, ApiV1UserProfileUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfileUpdate"

/**
 * @description Список сообщений **message_type**:* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Изменение данных профиля пользователя
 * @link /api/v1/user/profile/ */
export async function apiV1UserProfileUpdate(
  data?: ApiV1UserProfileUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileUpdateMutationResponse>> {
  const res = await client<ApiV1UserProfileUpdateMutationResponse, ApiV1UserProfileUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/user/profile/`,
    data,
    ...options,
  })
  return res
}
