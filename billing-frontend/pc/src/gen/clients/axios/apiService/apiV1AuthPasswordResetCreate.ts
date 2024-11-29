import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthPasswordResetCreateMutationRequest, ApiV1AuthPasswordResetCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthPasswordResetCreate"

/**
 * @description Список сообщений **message_type**:* **email_already_sent**Сообщение уже отправлено на указанный e-mail адрес. Попробуйте через одну минуту.* **user_with_this_email_not_registered**Учетная запись пользователя с указанным e-mail адресом не зарегистрирована.* **user_inactive**Учетная запись пользователя не активна.* **user_is_not_verified**Учетная запись пользователя не подтверждена.* **user_is_blocked**Учетная запись пользователя заблокирована.* **captcha_token_not_valid**Не удалось распознать капчу.* **user_is_deleted**Учетная запись пользователя удалена.
 * @summary Сброс пароля пользователя
 * @link /api/v1/auth/password/reset/ */
export async function apiV1AuthPasswordResetCreate(
  data: ApiV1AuthPasswordResetCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthPasswordResetCreateMutationResponse>> {
  const res = await client<ApiV1AuthPasswordResetCreateMutationResponse, ApiV1AuthPasswordResetCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/password/reset/`,
    data,
    ...options,
  })
  return res
}
