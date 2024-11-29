import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserProfileUpdateMutationRequest, ApiV1UserProfileUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserProfileUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileUpdateClient = typeof client<ApiV1UserProfileUpdateMutationResponse, never, ApiV1UserProfileUpdateMutationRequest>
type ApiV1UserProfileUpdate = {
  data: ApiV1UserProfileUpdateMutationResponse
  error: never
  request: ApiV1UserProfileUpdateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.* **db_template_not_found_by_name**Шаблон с указанным именем {name} не обнаружен.
 * @summary Изменение данных профиля пользователя
 * @link /api/v1/user/profile/ */
export function useApiV1UserProfileUpdate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileUpdate["response"], ApiV1UserProfileUpdate["error"], ApiV1UserProfileUpdate["request"]>
    client?: ApiV1UserProfileUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileUpdate["response"], ApiV1UserProfileUpdate["error"], ApiV1UserProfileUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileUpdate["response"], ApiV1UserProfileUpdate["error"], ApiV1UserProfileUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileUpdate["data"], ApiV1UserProfileUpdate["error"], ApiV1UserProfileUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/profile/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
