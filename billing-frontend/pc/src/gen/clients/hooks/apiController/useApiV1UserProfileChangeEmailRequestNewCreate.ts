import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileChangeEmailRequestNewCreateMutationRequest,
  ApiV1UserProfileChangeEmailRequestNewCreateMutationResponse,
  ApiV1UserProfileChangeEmailRequestNewCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileChangeEmailRequestNewCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileChangeEmailRequestNewCreateClient = typeof client<
  ApiV1UserProfileChangeEmailRequestNewCreateMutationResponse,
  ApiV1UserProfileChangeEmailRequestNewCreate201,
  ApiV1UserProfileChangeEmailRequestNewCreateMutationRequest
>
type ApiV1UserProfileChangeEmailRequestNewCreate = {
  data: ApiV1UserProfileChangeEmailRequestNewCreateMutationResponse
  error: ApiV1UserProfileChangeEmailRequestNewCreate201
  request: ApiV1UserProfileChangeEmailRequestNewCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileChangeEmailRequestNewCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileChangeEmailRequestNewCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileChangeEmailRequestNewCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **new_user_email_is_equal_to_current**Указанный e-mail адрес совпадает с текущим e-mail адресом пользователя.* **user_email_already_exists**Пользователь с указанным e-mail адресом уже зарегистрирован.* **user_change_email_uid_invalid**UID указан неверно.* **user_change_email_token_invalid**Токен указан неверно.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Отправка запроса изменения email на новый email пользователя
 * @link /api/v1/user/profile/change-email-request-new */
export function useApiV1UserProfileChangeEmailRequestNewCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileChangeEmailRequestNewCreate["response"], ApiV1UserProfileChangeEmailRequestNewCreate["error"], ApiV1UserProfileChangeEmailRequestNewCreate["request"]>
    client?: ApiV1UserProfileChangeEmailRequestNewCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileChangeEmailRequestNewCreate["response"], ApiV1UserProfileChangeEmailRequestNewCreate["error"], ApiV1UserProfileChangeEmailRequestNewCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileChangeEmailRequestNewCreate["response"], ApiV1UserProfileChangeEmailRequestNewCreate["error"], ApiV1UserProfileChangeEmailRequestNewCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileChangeEmailRequestNewCreate["data"], ApiV1UserProfileChangeEmailRequestNewCreate["error"], ApiV1UserProfileChangeEmailRequestNewCreate["request"]>({
        method: "post",
        url: `/api/v1/user/profile/change-email-request-new`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
