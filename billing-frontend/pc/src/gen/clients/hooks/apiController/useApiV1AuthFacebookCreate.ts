import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1AuthFacebookCreateMutationRequest, ApiV1AuthFacebookCreateMutationResponse, ApiV1AuthFacebookCreate201 } from "../../../models/ts/apiController/ApiV1AuthFacebookCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthFacebookCreateClient = typeof client<ApiV1AuthFacebookCreateMutationResponse, ApiV1AuthFacebookCreate201, ApiV1AuthFacebookCreateMutationRequest>
type ApiV1AuthFacebookCreate = {
  data: ApiV1AuthFacebookCreateMutationResponse
  error: ApiV1AuthFacebookCreate201
  request: ApiV1AuthFacebookCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthFacebookCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthFacebookCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthFacebookCreateClient>>
  }
}
/**
 * @link /api/v1/auth/facebook/ */
export function useApiV1AuthFacebookCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthFacebookCreate["response"], ApiV1AuthFacebookCreate["error"], ApiV1AuthFacebookCreate["request"]>
    client?: ApiV1AuthFacebookCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthFacebookCreate["response"], ApiV1AuthFacebookCreate["error"], ApiV1AuthFacebookCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthFacebookCreate["response"], ApiV1AuthFacebookCreate["error"], ApiV1AuthFacebookCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthFacebookCreate["data"], ApiV1AuthFacebookCreate["error"], ApiV1AuthFacebookCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/facebook/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
