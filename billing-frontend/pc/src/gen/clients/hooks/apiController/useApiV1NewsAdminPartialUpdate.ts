import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1NewsAdminPartialUpdateMutationRequest,
  ApiV1NewsAdminPartialUpdateMutationResponse,
  ApiV1NewsAdminPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1NewsAdminPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1NewsAdminPartialUpdateClient = typeof client<ApiV1NewsAdminPartialUpdateMutationResponse, never, ApiV1NewsAdminPartialUpdateMutationRequest>
type ApiV1NewsAdminPartialUpdate = {
  data: ApiV1NewsAdminPartialUpdateMutationResponse
  error: never
  request: ApiV1NewsAdminPartialUpdateMutationRequest
  pathParams: ApiV1NewsAdminPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export function useApiV1NewsAdminPartialUpdate(
  id: ApiV1NewsAdminPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1NewsAdminPartialUpdate["response"], ApiV1NewsAdminPartialUpdate["error"], ApiV1NewsAdminPartialUpdate["request"]>
    client?: ApiV1NewsAdminPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1NewsAdminPartialUpdate["response"], ApiV1NewsAdminPartialUpdate["error"], ApiV1NewsAdminPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1NewsAdminPartialUpdate["response"], ApiV1NewsAdminPartialUpdate["error"], ApiV1NewsAdminPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1NewsAdminPartialUpdate["data"], ApiV1NewsAdminPartialUpdate["error"], ApiV1NewsAdminPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/news/admin/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
