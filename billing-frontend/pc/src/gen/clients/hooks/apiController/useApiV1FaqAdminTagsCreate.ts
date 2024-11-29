import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminTagsCreateMutationRequest, ApiV1FaqAdminTagsCreateMutationResponse, ApiV1FaqAdminTagsCreate201 } from "../../../models/ts/apiController/ApiV1FaqAdminTagsCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminTagsCreateClient = typeof client<ApiV1FaqAdminTagsCreateMutationResponse, ApiV1FaqAdminTagsCreate201, ApiV1FaqAdminTagsCreateMutationRequest>
type ApiV1FaqAdminTagsCreate = {
  data: ApiV1FaqAdminTagsCreateMutationResponse
  error: ApiV1FaqAdminTagsCreate201
  request: ApiV1FaqAdminTagsCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminTagsCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminTagsCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminTagsCreateClient>>
  }
}
/**
 * @description .
 * @summary Список тегов.
 * @link /api/v1/faq/admin/tags/ */
export function useApiV1FaqAdminTagsCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminTagsCreate["response"], ApiV1FaqAdminTagsCreate["error"], ApiV1FaqAdminTagsCreate["request"]>
    client?: ApiV1FaqAdminTagsCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminTagsCreate["response"], ApiV1FaqAdminTagsCreate["error"], ApiV1FaqAdminTagsCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminTagsCreate["response"], ApiV1FaqAdminTagsCreate["error"], ApiV1FaqAdminTagsCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminTagsCreate["data"], ApiV1FaqAdminTagsCreate["error"], ApiV1FaqAdminTagsCreate["request"]>({
        method: "post",
        url: `/api/v1/faq/admin/tags/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
