import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminTagsUpdateMutationRequest, ApiV1FaqAdminTagsUpdateMutationResponse, ApiV1FaqAdminTagsUpdatePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminTagsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminTagsUpdateClient = typeof client<ApiV1FaqAdminTagsUpdateMutationResponse, never, ApiV1FaqAdminTagsUpdateMutationRequest>
type ApiV1FaqAdminTagsUpdate = {
  data: ApiV1FaqAdminTagsUpdateMutationResponse
  error: never
  request: ApiV1FaqAdminTagsUpdateMutationRequest
  pathParams: ApiV1FaqAdminTagsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminTagsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminTagsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminTagsUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export function useApiV1FaqAdminTagsUpdate(
  id: ApiV1FaqAdminTagsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminTagsUpdate["response"], ApiV1FaqAdminTagsUpdate["error"], ApiV1FaqAdminTagsUpdate["request"]>
    client?: ApiV1FaqAdminTagsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminTagsUpdate["response"], ApiV1FaqAdminTagsUpdate["error"], ApiV1FaqAdminTagsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminTagsUpdate["response"], ApiV1FaqAdminTagsUpdate["error"], ApiV1FaqAdminTagsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminTagsUpdate["data"], ApiV1FaqAdminTagsUpdate["error"], ApiV1FaqAdminTagsUpdate["request"]>({
        method: "put",
        url: `/api/v1/faq/admin/tags/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
