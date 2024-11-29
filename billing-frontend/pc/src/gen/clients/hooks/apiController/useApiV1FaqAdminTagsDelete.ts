import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminTagsDeleteMutationResponse, ApiV1FaqAdminTagsDeletePathParams, ApiV1FaqAdminTagsDelete204 } from "../../../models/ts/apiController/ApiV1FaqAdminTagsDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminTagsDeleteClient = typeof client<ApiV1FaqAdminTagsDeleteMutationResponse, ApiV1FaqAdminTagsDelete204, never>
type ApiV1FaqAdminTagsDelete = {
  data: ApiV1FaqAdminTagsDeleteMutationResponse
  error: ApiV1FaqAdminTagsDelete204
  request: never
  pathParams: ApiV1FaqAdminTagsDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminTagsDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminTagsDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminTagsDeleteClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export function useApiV1FaqAdminTagsDelete(
  id: ApiV1FaqAdminTagsDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminTagsDelete["response"], ApiV1FaqAdminTagsDelete["error"], void>
    client?: ApiV1FaqAdminTagsDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminTagsDelete["response"], ApiV1FaqAdminTagsDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminTagsDelete["response"], ApiV1FaqAdminTagsDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1FaqAdminTagsDelete["data"], ApiV1FaqAdminTagsDelete["error"], void>({
        method: "delete",
        url: `/api/v1/faq/admin/tags/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
