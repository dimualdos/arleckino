import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1FaqAdminTagsPartialUpdateMutationRequest,
  ApiV1FaqAdminTagsPartialUpdateMutationResponse,
  ApiV1FaqAdminTagsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1FaqAdminTagsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminTagsPartialUpdateClient = typeof client<ApiV1FaqAdminTagsPartialUpdateMutationResponse, never, ApiV1FaqAdminTagsPartialUpdateMutationRequest>
type ApiV1FaqAdminTagsPartialUpdate = {
  data: ApiV1FaqAdminTagsPartialUpdateMutationResponse
  error: never
  request: ApiV1FaqAdminTagsPartialUpdateMutationRequest
  pathParams: ApiV1FaqAdminTagsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminTagsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminTagsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminTagsPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление тега.
 * @link /api/v1/faq/admin/tags/:id/ */
export function useApiV1FaqAdminTagsPartialUpdate(
  id: ApiV1FaqAdminTagsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminTagsPartialUpdate["response"], ApiV1FaqAdminTagsPartialUpdate["error"], ApiV1FaqAdminTagsPartialUpdate["request"]>
    client?: ApiV1FaqAdminTagsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminTagsPartialUpdate["response"], ApiV1FaqAdminTagsPartialUpdate["error"], ApiV1FaqAdminTagsPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminTagsPartialUpdate["response"], ApiV1FaqAdminTagsPartialUpdate["error"], ApiV1FaqAdminTagsPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminTagsPartialUpdate["data"], ApiV1FaqAdminTagsPartialUpdate["error"], ApiV1FaqAdminTagsPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/faq/admin/tags/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
