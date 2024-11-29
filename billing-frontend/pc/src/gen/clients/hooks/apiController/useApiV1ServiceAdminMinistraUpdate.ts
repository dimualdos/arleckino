import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraUpdateMutationRequest,
  ApiV1ServiceAdminMinistraUpdateMutationResponse,
  ApiV1ServiceAdminMinistraUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraUpdateClient = typeof client<ApiV1ServiceAdminMinistraUpdateMutationResponse, never, ApiV1ServiceAdminMinistraUpdateMutationRequest>
type ApiV1ServiceAdminMinistraUpdate = {
  data: ApiV1ServiceAdminMinistraUpdateMutationResponse
  error: never
  request: ApiV1ServiceAdminMinistraUpdateMutationRequest
  pathParams: ApiV1ServiceAdminMinistraUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraUpdateClient>>
  }
}
/**
 * @link /api/v1/service/admin/ministra/:id/ */
export function useApiV1ServiceAdminMinistraUpdate(
  id: ApiV1ServiceAdminMinistraUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraUpdate["response"], ApiV1ServiceAdminMinistraUpdate["error"], ApiV1ServiceAdminMinistraUpdate["request"]>
    client?: ApiV1ServiceAdminMinistraUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraUpdate["response"], ApiV1ServiceAdminMinistraUpdate["error"], ApiV1ServiceAdminMinistraUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraUpdate["response"], ApiV1ServiceAdminMinistraUpdate["error"], ApiV1ServiceAdminMinistraUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminMinistraUpdate["data"], ApiV1ServiceAdminMinistraUpdate["error"], ApiV1ServiceAdminMinistraUpdate["request"]>({
        method: "put",
        url: `/api/v1/service/admin/ministra/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
