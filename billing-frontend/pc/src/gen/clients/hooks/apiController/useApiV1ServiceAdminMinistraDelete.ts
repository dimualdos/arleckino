import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraDeleteMutationResponse,
  ApiV1ServiceAdminMinistraDeletePathParams,
  ApiV1ServiceAdminMinistraDelete204,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraDeleteClient = typeof client<ApiV1ServiceAdminMinistraDeleteMutationResponse, ApiV1ServiceAdminMinistraDelete204, never>
type ApiV1ServiceAdminMinistraDelete = {
  data: ApiV1ServiceAdminMinistraDeleteMutationResponse
  error: ApiV1ServiceAdminMinistraDelete204
  request: never
  pathParams: ApiV1ServiceAdminMinistraDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraDeleteClient>>
  }
}
/**
 * @link /api/v1/service/admin/ministra/:id/ */
export function useApiV1ServiceAdminMinistraDelete(
  id: ApiV1ServiceAdminMinistraDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraDelete["response"], ApiV1ServiceAdminMinistraDelete["error"], void>
    client?: ApiV1ServiceAdminMinistraDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraDelete["response"], ApiV1ServiceAdminMinistraDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraDelete["response"], ApiV1ServiceAdminMinistraDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1ServiceAdminMinistraDelete["data"], ApiV1ServiceAdminMinistraDelete["error"], void>({
        method: "delete",
        url: `/api/v1/service/admin/ministra/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
