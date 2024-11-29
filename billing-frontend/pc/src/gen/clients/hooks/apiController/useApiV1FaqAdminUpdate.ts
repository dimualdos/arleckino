import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminUpdateMutationRequest, ApiV1FaqAdminUpdateMutationResponse, ApiV1FaqAdminUpdatePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminUpdateClient = typeof client<ApiV1FaqAdminUpdateMutationResponse, never, ApiV1FaqAdminUpdateMutationRequest>
type ApiV1FaqAdminUpdate = {
  data: ApiV1FaqAdminUpdateMutationResponse
  error: never
  request: ApiV1FaqAdminUpdateMutationRequest
  pathParams: ApiV1FaqAdminUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export function useApiV1FaqAdminUpdate(
  id: ApiV1FaqAdminUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminUpdate["response"], ApiV1FaqAdminUpdate["error"], ApiV1FaqAdminUpdate["request"]>
    client?: ApiV1FaqAdminUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminUpdate["response"], ApiV1FaqAdminUpdate["error"], ApiV1FaqAdminUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminUpdate["response"], ApiV1FaqAdminUpdate["error"], ApiV1FaqAdminUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminUpdate["data"], ApiV1FaqAdminUpdate["error"], ApiV1FaqAdminUpdate["request"]>({
        method: "put",
        url: `/api/v1/faq/admin/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
