import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraListCreateMutationRequest,
  ApiV1ServiceAdminMinistraListCreateMutationResponse,
  ApiV1ServiceAdminMinistraListCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraListCreateClient = typeof client<
  ApiV1ServiceAdminMinistraListCreateMutationResponse,
  ApiV1ServiceAdminMinistraListCreate201,
  ApiV1ServiceAdminMinistraListCreateMutationRequest
>
type ApiV1ServiceAdminMinistraListCreate = {
  data: ApiV1ServiceAdminMinistraListCreateMutationResponse
  error: ApiV1ServiceAdminMinistraListCreate201
  request: ApiV1ServiceAdminMinistraListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraListCreateClient>>
  }
}
/**
 * @link /api/v1/service/admin/ministra/list/ */
export function useApiV1ServiceAdminMinistraListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraListCreate["response"], ApiV1ServiceAdminMinistraListCreate["error"], ApiV1ServiceAdminMinistraListCreate["request"]>
    client?: ApiV1ServiceAdminMinistraListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraListCreate["response"], ApiV1ServiceAdminMinistraListCreate["error"], ApiV1ServiceAdminMinistraListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraListCreate["response"], ApiV1ServiceAdminMinistraListCreate["error"], ApiV1ServiceAdminMinistraListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminMinistraListCreate["data"], ApiV1ServiceAdminMinistraListCreate["error"], ApiV1ServiceAdminMinistraListCreate["request"]>({
        method: "post",
        url: `/api/v1/service/admin/ministra/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
