import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1NewsAdminUpdateMutationRequest, ApiV1NewsAdminUpdateMutationResponse, ApiV1NewsAdminUpdatePathParams } from "../../../models/ts/apiController/ApiV1NewsAdminUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1NewsAdminUpdateClient = typeof client<ApiV1NewsAdminUpdateMutationResponse, never, ApiV1NewsAdminUpdateMutationRequest>
type ApiV1NewsAdminUpdate = {
  data: ApiV1NewsAdminUpdateMutationResponse
  error: never
  request: ApiV1NewsAdminUpdateMutationRequest
  pathParams: ApiV1NewsAdminUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export function useApiV1NewsAdminUpdate(
  id: ApiV1NewsAdminUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1NewsAdminUpdate["response"], ApiV1NewsAdminUpdate["error"], ApiV1NewsAdminUpdate["request"]>
    client?: ApiV1NewsAdminUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1NewsAdminUpdate["response"], ApiV1NewsAdminUpdate["error"], ApiV1NewsAdminUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1NewsAdminUpdate["response"], ApiV1NewsAdminUpdate["error"], ApiV1NewsAdminUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1NewsAdminUpdate["data"], ApiV1NewsAdminUpdate["error"], ApiV1NewsAdminUpdate["request"]>({
        method: "put",
        url: `/api/v1/news/admin/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
