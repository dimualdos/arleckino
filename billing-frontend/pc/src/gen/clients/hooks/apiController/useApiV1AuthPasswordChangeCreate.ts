import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1AuthPasswordChangeCreateMutationRequest,
  ApiV1AuthPasswordChangeCreateMutationResponse,
  ApiV1AuthPasswordChangeCreatePathParams,
  ApiV1AuthPasswordChangeCreate201,
} from "../../../models/ts/apiController/ApiV1AuthPasswordChangeCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1AuthPasswordChangeCreateClient = typeof client<ApiV1AuthPasswordChangeCreateMutationResponse, ApiV1AuthPasswordChangeCreate201, ApiV1AuthPasswordChangeCreateMutationRequest>
type ApiV1AuthPasswordChangeCreate = {
  data: ApiV1AuthPasswordChangeCreateMutationResponse
  error: ApiV1AuthPasswordChangeCreate201
  request: ApiV1AuthPasswordChangeCreateMutationRequest
  pathParams: ApiV1AuthPasswordChangeCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1AuthPasswordChangeCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1AuthPasswordChangeCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1AuthPasswordChangeCreateClient>>
  }
}
/**
 * @description .
 * @summary Изменение пароля пользователя
 * @link /api/v1/auth/password/change/:uidb64/:token/ */
export function useApiV1AuthPasswordChangeCreate(
  token: ApiV1AuthPasswordChangeCreatePathParams["token"],
  uidb64: ApiV1AuthPasswordChangeCreatePathParams["uidb64"],
  options: {
    mutation?: UseMutationOptions<ApiV1AuthPasswordChangeCreate["response"], ApiV1AuthPasswordChangeCreate["error"], ApiV1AuthPasswordChangeCreate["request"]>
    client?: ApiV1AuthPasswordChangeCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1AuthPasswordChangeCreate["response"], ApiV1AuthPasswordChangeCreate["error"], ApiV1AuthPasswordChangeCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1AuthPasswordChangeCreate["response"], ApiV1AuthPasswordChangeCreate["error"], ApiV1AuthPasswordChangeCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1AuthPasswordChangeCreate["data"], ApiV1AuthPasswordChangeCreate["error"], ApiV1AuthPasswordChangeCreate["request"]>({
        method: "post",
        url: `/api/v1/auth/password/change/${uidb64}/${token}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
