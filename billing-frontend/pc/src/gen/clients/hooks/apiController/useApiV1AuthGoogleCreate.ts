import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1AuthGoogleCreateMutationRequest, ApiV1AuthGoogleCreateMutationResponse, ApiV1AuthGoogleCreate201 } from "../../../models/ts/apiController/ApiV1AuthGoogleCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthGoogleCreateClient = typeof client<ApiV1AuthGoogleCreateMutationResponse, ApiV1AuthGoogleCreate201, ApiV1AuthGoogleCreateMutationRequest>
type ApiV1AuthGoogleCreate = {
  data: ApiV1AuthGoogleCreateMutationResponse
  error: ApiV1AuthGoogleCreate201
  request: ApiV1AuthGoogleCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthGoogleCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthGoogleCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthGoogleCreateClient>>
  }
}
/**
 * @link /api/v1/auth/google/ */
export function useApiV1AuthGoogleCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthGoogleCreate["response"], ApiV1AuthGoogleCreate["error"], ApiV1AuthGoogleCreate["request"]>
    client?: ApiV1AuthGoogleCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthGoogleCreate["response"], ApiV1AuthGoogleCreate["error"], ApiV1AuthGoogleCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthGoogleCreate["response"], ApiV1AuthGoogleCreate["error"], ApiV1AuthGoogleCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthGoogleCreate["data"], ApiV1AuthGoogleCreate["error"], ApiV1AuthGoogleCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/google/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
