import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserProfileChangeEmailRequestNewCreateMutationRequest,
  ApiV1UserProfileChangeEmailRequestNewCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1UserProfileChangeEmailRequestNewCreate"

/**
 * @description Список сообщений **message_type**:* **new_user_email_is_equal_to_current**Указанный e-mail адрес совпадает с текущим e-mail адресом пользователя.* **user_email_already_exists**Пользователь с указанным e-mail адресом уже зарегистрирован.* **user_change_email_uid_invalid**UID указан неверно.* **user_change_email_token_invalid**Токен указан неверно.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Отправка запроса изменения email на новый email пользователя
 * @link /api/v1/user/profile/change-email-request-new */
export async function apiV1UserProfileChangeEmailRequestNewCreate(
  data: ApiV1UserProfileChangeEmailRequestNewCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileChangeEmailRequestNewCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileChangeEmailRequestNewCreateMutationResponse, ApiV1UserProfileChangeEmailRequestNewCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/profile/change-email-request-new`,
    data,
    ...options,
  })
  return res
}
