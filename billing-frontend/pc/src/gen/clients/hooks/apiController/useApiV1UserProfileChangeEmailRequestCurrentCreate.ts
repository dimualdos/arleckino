import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileChangeEmailRequestCurrentCreateMutationResponse,
  ApiV1UserProfileChangeEmailRequestCurrentCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileChangeEmailRequestCurrentCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileChangeEmailRequestCurrentCreateClient = typeof client<ApiV1UserProfileChangeEmailRequestCurrentCreateMutationResponse, ApiV1UserProfileChangeEmailRequestCurrentCreate201, never>
type ApiV1UserProfileChangeEmailRequestCurrentCreate = {
  data: ApiV1UserProfileChangeEmailRequestCurrentCreateMutationResponse
  error: ApiV1UserProfileChangeEmailRequestCurrentCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileChangeEmailRequestCurrentCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileChangeEmailRequestCurrentCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileChangeEmailRequestCurrentCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Отправка запроса изменения email на текущий email пользователя
 * @link /api/v1/user/profile/change-email-request-current */
export function useApiV1UserProfileChangeEmailRequestCurrentCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileChangeEmailRequestCurrentCreate["response"], ApiV1UserProfileChangeEmailRequestCurrentCreate["error"], void>
    client?: ApiV1UserProfileChangeEmailRequestCurrentCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileChangeEmailRequestCurrentCreate["response"], ApiV1UserProfileChangeEmailRequestCurrentCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileChangeEmailRequestCurrentCreate["response"], ApiV1UserProfileChangeEmailRequestCurrentCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1UserProfileChangeEmailRequestCurrentCreate["data"], ApiV1UserProfileChangeEmailRequestCurrentCreate["error"], void>({
        method: "post",
        url: `/api/v1/user/profile/change-email-request-current`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
