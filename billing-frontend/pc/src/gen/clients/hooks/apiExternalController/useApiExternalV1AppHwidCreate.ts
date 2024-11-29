import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiExternalV1AppHwidCreateMutationRequest,
  ApiExternalV1AppHwidCreateMutationResponse,
  ApiExternalV1AppHwidCreate201,
} from "../../../models/ts/apiExternalController/ApiExternalV1AppHwidCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiExternalV1AppHwidCreateClient = typeof client<ApiExternalV1AppHwidCreateMutationResponse, ApiExternalV1AppHwidCreate201, ApiExternalV1AppHwidCreateMutationRequest>
type ApiExternalV1AppHwidCreate = {
  data: ApiExternalV1AppHwidCreateMutationResponse
  error: ApiExternalV1AppHwidCreate201
  request: ApiExternalV1AppHwidCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1AppHwidCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1AppHwidCreateClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1AppHwidCreateClient>>
  }
}
/**
 * @description Привязка приложения с указанным HWID к устройству пользователя по коду сопряжения.
 * @link /api_external/v1/app/hwid/ */
export function useApiExternalV1AppHwidCreate(
  options: {
    mutation?: UseMutationOptions<ApiExternalV1AppHwidCreate["response"], ApiExternalV1AppHwidCreate["error"], ApiExternalV1AppHwidCreate["request"]>
    client?: ApiExternalV1AppHwidCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiExternalV1AppHwidCreate["response"], ApiExternalV1AppHwidCreate["error"], ApiExternalV1AppHwidCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiExternalV1AppHwidCreate["response"], ApiExternalV1AppHwidCreate["error"], ApiExternalV1AppHwidCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiExternalV1AppHwidCreate["data"], ApiExternalV1AppHwidCreate["error"], ApiExternalV1AppHwidCreate["request"]>({
        method: "post",
        url: `/api_external/v1/app/hwid/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
