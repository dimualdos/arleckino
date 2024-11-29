import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1NewsAdminDeleteMutationResponse, ApiV1NewsAdminDeletePathParams, ApiV1NewsAdminDelete204 } from "../../../models/ts/apiController/ApiV1NewsAdminDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1NewsAdminDeleteClient = typeof client<ApiV1NewsAdminDeleteMutationResponse, ApiV1NewsAdminDelete204, never>
type ApiV1NewsAdminDelete = {
  data: ApiV1NewsAdminDeleteMutationResponse
  error: ApiV1NewsAdminDelete204
  request: never
  pathParams: ApiV1NewsAdminDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export function useApiV1NewsAdminDelete(
  id: ApiV1NewsAdminDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1NewsAdminDelete["response"], ApiV1NewsAdminDelete["error"], void>
    client?: ApiV1NewsAdminDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1NewsAdminDelete["response"], ApiV1NewsAdminDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1NewsAdminDelete["response"], ApiV1NewsAdminDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1NewsAdminDelete["data"], ApiV1NewsAdminDelete["error"], void>({
        method: "delete",
        url: `/api/v1/news/admin/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
