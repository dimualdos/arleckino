import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserProfileChangeEmailRequestCurrentCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfileChangeEmailRequestCurrentCreate"

/**
 * @description Список сообщений **message_type**:* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Отправка запроса изменения email на текущий email пользователя
 * @link /api/v1/user/profile/change-email-request-current */
export async function apiV1UserProfileChangeEmailRequestCurrentCreate(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileChangeEmailRequestCurrentCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileChangeEmailRequestCurrentCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/profile/change-email-request-current`,
    ...options,
  })
  return res
}
