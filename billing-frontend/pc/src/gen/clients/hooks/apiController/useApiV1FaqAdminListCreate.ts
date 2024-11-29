import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminListCreateMutationRequest, ApiV1FaqAdminListCreateMutationResponse, ApiV1FaqAdminListCreate201 } from "../../../models/ts/apiController/ApiV1FaqAdminListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminListCreateClient = typeof client<ApiV1FaqAdminListCreateMutationResponse, ApiV1FaqAdminListCreate201, ApiV1FaqAdminListCreateMutationRequest>
type ApiV1FaqAdminListCreate = {
  data: ApiV1FaqAdminListCreateMutationResponse
  error: ApiV1FaqAdminListCreate201
  request: ApiV1FaqAdminListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminListCreateClient>>
  }
}
/**
 * @description Параметры запроса:?is_published=true/false - фильтр опубликованных вопросов?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.* **order_should_be_a_positive_number**Поле order должно быть положительным числом.
 * @summary Список частых вопросов, создание нового вопроса.
 * @link /api/v1/faq/admin/list/ */
export function useApiV1FaqAdminListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminListCreate["response"], ApiV1FaqAdminListCreate["error"], ApiV1FaqAdminListCreate["request"]>
    client?: ApiV1FaqAdminListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminListCreate["response"], ApiV1FaqAdminListCreate["error"], ApiV1FaqAdminListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminListCreate["response"], ApiV1FaqAdminListCreate["error"], ApiV1FaqAdminListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminListCreate["data"], ApiV1FaqAdminListCreate["error"], ApiV1FaqAdminListCreate["request"]>({
        method: "post",
        url: `/api/v1/faq/admin/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
