import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserProfileUnsubscribeMailListCreateMutationRequest,
  ApiV1UserProfileUnsubscribeMailListCreateMutationResponse,
  ApiV1UserProfileUnsubscribeMailListCreate201,
} from "../../../models/ts/apiController/ApiV1UserProfileUnsubscribeMailListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserProfileUnsubscribeMailListCreateClient = typeof client<
  ApiV1UserProfileUnsubscribeMailListCreateMutationResponse,
  ApiV1UserProfileUnsubscribeMailListCreate201,
  ApiV1UserProfileUnsubscribeMailListCreateMutationRequest
>
type ApiV1UserProfileUnsubscribeMailListCreate = {
  data: ApiV1UserProfileUnsubscribeMailListCreateMutationResponse
  error: ApiV1UserProfileUnsubscribeMailListCreate201
  request: ApiV1UserProfileUnsubscribeMailListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserProfileUnsubscribeMailListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserProfileUnsubscribeMailListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserProfileUnsubscribeMailListCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **unsubscribe_mail_list_token_invalid**Указан некорректный токен для отмены подписки на рассылку.* **unsubscribe_mail_list_email_invalid**Указанный e-mail не совпадает с e-mail пользователя.* **unsubscribe_mail_list_already_completed**Отмена подписки на рассылку уже выполнена.
 * @summary Отписаться от рассылки
 * @link /api/v1/user/profile/unsubscribe-mail-list */
export function useApiV1UserProfileUnsubscribeMailListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserProfileUnsubscribeMailListCreate["response"], ApiV1UserProfileUnsubscribeMailListCreate["error"], ApiV1UserProfileUnsubscribeMailListCreate["request"]>
    client?: ApiV1UserProfileUnsubscribeMailListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserProfileUnsubscribeMailListCreate["response"], ApiV1UserProfileUnsubscribeMailListCreate["error"], ApiV1UserProfileUnsubscribeMailListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserProfileUnsubscribeMailListCreate["response"], ApiV1UserProfileUnsubscribeMailListCreate["error"], ApiV1UserProfileUnsubscribeMailListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserProfileUnsubscribeMailListCreate["data"], ApiV1UserProfileUnsubscribeMailListCreate["error"], ApiV1UserProfileUnsubscribeMailListCreate["request"]>({
        method: "post",
        url: `/api/v1/user/profile/unsubscribe-mail-list`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
