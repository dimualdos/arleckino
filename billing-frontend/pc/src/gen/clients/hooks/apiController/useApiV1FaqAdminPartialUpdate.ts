import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1FaqAdminPartialUpdateMutationRequest,
  ApiV1FaqAdminPartialUpdateMutationResponse,
  ApiV1FaqAdminPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1FaqAdminPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminPartialUpdateClient = typeof client<ApiV1FaqAdminPartialUpdateMutationResponse, never, ApiV1FaqAdminPartialUpdateMutationRequest>
type ApiV1FaqAdminPartialUpdate = {
  data: ApiV1FaqAdminPartialUpdateMutationResponse
  error: never
  request: ApiV1FaqAdminPartialUpdateMutationRequest
  pathParams: ApiV1FaqAdminPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export function useApiV1FaqAdminPartialUpdate(
  id: ApiV1FaqAdminPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminPartialUpdate["response"], ApiV1FaqAdminPartialUpdate["error"], ApiV1FaqAdminPartialUpdate["request"]>
    client?: ApiV1FaqAdminPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminPartialUpdate["response"], ApiV1FaqAdminPartialUpdate["error"], ApiV1FaqAdminPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminPartialUpdate["response"], ApiV1FaqAdminPartialUpdate["error"], ApiV1FaqAdminPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminPartialUpdate["data"], ApiV1FaqAdminPartialUpdate["error"], ApiV1FaqAdminPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/faq/admin/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
