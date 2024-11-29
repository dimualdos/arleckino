import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthAccountConfirmEmailCreateMutationRequest,
  ApiV1AuthAccountConfirmEmailCreateMutationResponse,
  ApiV1AuthAccountConfirmEmailCreate201,
} from "../../../models/ts/apiController/ApiV1AuthAccountConfirmEmailCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthAccountConfirmEmailCreateClient = typeof client<
  ApiV1AuthAccountConfirmEmailCreateMutationResponse,
  ApiV1AuthAccountConfirmEmailCreate201,
  ApiV1AuthAccountConfirmEmailCreateMutationRequest
>
type ApiV1AuthAccountConfirmEmailCreate = {
  data: ApiV1AuthAccountConfirmEmailCreateMutationResponse
  error: ApiV1AuthAccountConfirmEmailCreate201
  request: ApiV1AuthAccountConfirmEmailCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthAccountConfirmEmailCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthAccountConfirmEmailCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthAccountConfirmEmailCreateClient>>
  }
}
/**
 * @link /api/v1/auth/account-confirm-email/ */
export function useApiV1AuthAccountConfirmEmailCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1AuthAccountConfirmEmailCreate["response"], ApiV1AuthAccountConfirmEmailCreate["error"], ApiV1AuthAccountConfirmEmailCreate["request"]>
    client?: ApiV1AuthAccountConfirmEmailCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthAccountConfirmEmailCreate["response"], ApiV1AuthAccountConfirmEmailCreate["error"], ApiV1AuthAccountConfirmEmailCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthAccountConfirmEmailCreate["response"], ApiV1AuthAccountConfirmEmailCreate["error"], ApiV1AuthAccountConfirmEmailCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthAccountConfirmEmailCreate["data"], ApiV1AuthAccountConfirmEmailCreate["error"], ApiV1AuthAccountConfirmEmailCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/account-confirm-email/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
