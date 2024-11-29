import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1AuthSignUpCreateMutationRequest, ApiV1AuthSignUpCreateMutationResponse } from "../../../models/ts/apiController/ApiV1AuthSignUpCreate"

/**
 * @description Список сообщений **message_type**:* **user_name_already_exists**Пользователь с таким именем уже зарегистрирован.* **user_email_already_exists**Пользователь с таким e-mail адресом уже зарегистрирован.* **password_too_common**Введённый пароль слишком широко распространён.* **password_too_short**Введённый пароль слишком короткий. Он должен содержать как минимум 6 символов.* **password_entirely_numeric**Введённый пароль состоит только из цифр.* **user_referral_token_invalid**Неверный формат реферального кода.* **user_not_found_by_referral_token**Пользователь не обнаружен по указанному реферальному коду.* **user_found_by_referral_token_is_blocked**Пользователь с указанным реферальным кодом заблокирован.* **db_template_language_not_found**Язык шаблонов с указанным кодом не обнаружен.* **captcha_token_not_valid**Не удалось распознать капчу.* **fingerprint_registration_not_permit**Запрещена регистрация пользователя.
 * @summary Регистрация нового пользователя
 * @link /api/v1/auth/sign-up/ */
export async function apiV1AuthSignUpCreate(
  data: ApiV1AuthSignUpCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1AuthSignUpCreateMutationResponse>> {
  const res = await client<ApiV1AuthSignUpCreateMutationResponse, ApiV1AuthSignUpCreateMutationRequest>({
    method: "post",
    url: `/api/v1/auth/sign-up/`,
    data,
    ...options,
  })
  return res
}
