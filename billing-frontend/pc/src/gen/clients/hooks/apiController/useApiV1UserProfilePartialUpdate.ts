import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserProfilePartialUpdateMutationRequest, ApiV1UserProfilePartialUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfilePartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfilePartialUpdateClient = typeof client<ApiV1UserProfilePartialUpdateMutationResponse, never, ApiV1UserProfilePartialUpdateMutationRequest>
type ApiV1UserProfilePartialUpdate = {
  data: ApiV1UserProfilePartialUpdateMutationResponse
  error: never
  request: ApiV1UserProfilePartialUpdateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfilePartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfilePartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfilePartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Изменение данных профиля пользователя
 * @link /api/v1/user/profile/ */
export function useApiV1UserProfilePartialUpdate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfilePartialUpdate["response"], ApiV1UserProfilePartialUpdate["error"], ApiV1UserProfilePartialUpdate["request"]>
    client?: ApiV1UserProfilePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfilePartialUpdate["response"], ApiV1UserProfilePartialUpdate["error"], ApiV1UserProfilePartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfilePartialUpdate["response"], ApiV1UserProfilePartialUpdate["error"], ApiV1UserProfilePartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfilePartialUpdate["data"], ApiV1UserProfilePartialUpdate["error"], ApiV1UserProfilePartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/profile/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
