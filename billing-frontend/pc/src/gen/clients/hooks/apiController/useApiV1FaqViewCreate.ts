import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqViewCreateMutationResponse, ApiV1FaqViewCreatePathParams, ApiV1FaqViewCreate201 } from "../../../models/ts/apiController/ApiV1FaqViewCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqViewCreateClient = typeof client<ApiV1FaqViewCreateMutationResponse, ApiV1FaqViewCreate201, never>
type ApiV1FaqViewCreate = {
  data: ApiV1FaqViewCreateMutationResponse
  error: ApiV1FaqViewCreate201
  request: never
  pathParams: ApiV1FaqViewCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqViewCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqViewCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqViewCreateClient>>
  }
}
/**
 * @description .
 * @summary Увеличить счетчик просмотров.
 * @link /api/v1/faq/:id/view/ */
export function useApiV1FaqViewCreate(
  id: ApiV1FaqViewCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqViewCreate["response"], ApiV1FaqViewCreate["error"], void>
    client?: ApiV1FaqViewCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqViewCreate["response"], ApiV1FaqViewCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqViewCreate["response"], ApiV1FaqViewCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1FaqViewCreate["data"], ApiV1FaqViewCreate["error"], void>({
        method: "post",
        url: `/api/v1/faq/${id}/view/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
