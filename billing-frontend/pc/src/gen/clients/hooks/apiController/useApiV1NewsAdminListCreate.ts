import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1NewsAdminListCreateMutationRequest, ApiV1NewsAdminListCreateMutationResponse, ApiV1NewsAdminListCreate201 } from "../../../models/ts/apiController/ApiV1NewsAdminListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1NewsAdminListCreateClient = typeof client<ApiV1NewsAdminListCreateMutationResponse, ApiV1NewsAdminListCreate201, ApiV1NewsAdminListCreateMutationRequest>
type ApiV1NewsAdminListCreate = {
  data: ApiV1NewsAdminListCreateMutationResponse
  error: ApiV1NewsAdminListCreate201
  request: ApiV1NewsAdminListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminListCreateClient>>
  }
}
/**
 * @description Параметры запроса:?is_news_pages=true/false - фильтр новостей для страниц новостей?is_pushes=true/false - фильтр новостей для страниц уведомлений?order=-created_date/created_date - сортировка по дате?search= - Поиск по названиюСписок сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Список новостей, создание новой новости.
 * @link /api/v1/news/admin/list/ */
export function useApiV1NewsAdminListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1NewsAdminListCreate["response"], ApiV1NewsAdminListCreate["error"], ApiV1NewsAdminListCreate["request"]>
    client?: ApiV1NewsAdminListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1NewsAdminListCreate["response"], ApiV1NewsAdminListCreate["error"], ApiV1NewsAdminListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1NewsAdminListCreate["response"], ApiV1NewsAdminListCreate["error"], ApiV1NewsAdminListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1NewsAdminListCreate["data"], ApiV1NewsAdminListCreate["error"], ApiV1NewsAdminListCreate["request"]>({
        method: "post",
        url: `/api/v1/news/admin/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
