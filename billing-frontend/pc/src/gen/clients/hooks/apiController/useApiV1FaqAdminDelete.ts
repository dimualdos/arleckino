import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminDeleteMutationResponse, ApiV1FaqAdminDeletePathParams, ApiV1FaqAdminDelete204 } from "../../../models/ts/apiController/ApiV1FaqAdminDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminDeleteClient = typeof client<ApiV1FaqAdminDeleteMutationResponse, ApiV1FaqAdminDelete204, never>
type ApiV1FaqAdminDelete = {
  data: ApiV1FaqAdminDeleteMutationResponse
  error: ApiV1FaqAdminDelete204
  request: never
  pathParams: ApiV1FaqAdminDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export function useApiV1FaqAdminDelete(
  id: ApiV1FaqAdminDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminDelete["response"], ApiV1FaqAdminDelete["error"], void>
    client?: ApiV1FaqAdminDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminDelete["response"], ApiV1FaqAdminDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminDelete["response"], ApiV1FaqAdminDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1FaqAdminDelete["data"], ApiV1FaqAdminDelete["error"], void>({
        method: "delete",
        url: `/api/v1/faq/admin/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
