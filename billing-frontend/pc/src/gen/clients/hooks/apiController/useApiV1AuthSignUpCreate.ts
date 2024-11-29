import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1AuthSignUpCreateMutationRequest, ApiV1AuthSignUpCreateMutationResponse, ApiV1AuthSignUpCreate201 } from "../../../models/ts/apiController/ApiV1AuthSignUpCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthSignUpCreateClient = typeof client<ApiV1AuthSignUpCreateMutationResponse, ApiV1AuthSignUpCreate201, ApiV1AuthSignUpCreateMutationRequest>
type ApiV1AuthSignUpCreate = {
  data: ApiV1AuthSignUpCreateMutationResponse
  error: ApiV1AuthSignUpCreate201
  request: ApiV1AuthSignUpCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthSignUpCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthSignUpCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthSignUpCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_name_already_exists**Пользователь с таким именем уже зарегистрирован.* **user_email_already_exists**Пользователь с таким e-mail адресом уже зарегистрирован.* **password_too_common**Введённый пароль слишком широко распространён.* **password_too_short**Введённый пароль слишком короткий. Он должен содержать как минимум 6 символов.* **password_entirely_numeric**Введённый пароль состоит только из цифр.* **user_referral_token_invalid**Неверный формат реферального кода.* **user_not_found_by_referral_token**Пользователь не обнаружен по указанному реферальному коду.* **user_found_by_referral_token_is_blocked**Пользователь с указанным реферальным кодом заблокирован.* **db_template_language_not_found**Язык шаблонов с указанным кодом не обнаружен.* **captcha_token_not_valid**Не удалось распознать капчу.* **fingerprint_registration_not_permit**Запрещена регистрация пользователя.
 * @summary Регистрация нового пользователя
 * @link /api/v1/auth/sign-up/ */
export function useApiV1AuthSignUpCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthSignUpCreate["response"], ApiV1AuthSignUpCreate["error"], ApiV1AuthSignUpCreate["request"]>
    client?: ApiV1AuthSignUpCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthSignUpCreate["response"], ApiV1AuthSignUpCreate["error"], ApiV1AuthSignUpCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthSignUpCreate["response"], ApiV1AuthSignUpCreate["error"], ApiV1AuthSignUpCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthSignUpCreate["data"], ApiV1AuthSignUpCreate["error"], ApiV1AuthSignUpCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/sign-up/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
