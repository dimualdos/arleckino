import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthSignInCreateMutationRequest, ApiV1AuthSignInCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthSignInCreate"

/**
 * @description Список сообщений **message_type**:* **auth_error**Неверный пароль или адрес электронной почты.* **user_inactive**Учетная запись пользователя не активна.* **user_is_not_verified**Учетная запись пользователя не подтверждена.* **user_is_blocked**Учетная запись пользователя заблокирована.* **captcha_token_not_valid**Не удалось распознать капчу.* **user_is_deleted**Учетная запись пользователя удалена.
 * @summary Вход пользователя
 * @link /api/v1/auth/sign-in/ */
export async function apiV1AuthSignInCreate(
  data: ApiV1AuthSignInCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthSignInCreateMutationResponse>> {
  const res = await client<ApiV1AuthSignInCreateMutationResponse, ApiV1AuthSignInCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/sign-in/`,
    data,
    ...options,
  })
  return res
}
