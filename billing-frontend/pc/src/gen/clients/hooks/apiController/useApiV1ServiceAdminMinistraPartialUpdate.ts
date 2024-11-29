import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminMinistraPartialUpdateMutationRequest,
  ApiV1ServiceAdminMinistraPartialUpdateMutationResponse,
  ApiV1ServiceAdminMinistraPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminMinistraPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminMinistraPartialUpdateClient = typeof client<ApiV1ServiceAdminMinistraPartialUpdateMutationResponse, never, ApiV1ServiceAdminMinistraPartialUpdateMutationRequest>
type ApiV1ServiceAdminMinistraPartialUpdate = {
  data: ApiV1ServiceAdminMinistraPartialUpdateMutationResponse
  error: never
  request: ApiV1ServiceAdminMinistraPartialUpdateMutationRequest
  pathParams: ApiV1ServiceAdminMinistraPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminMinistraPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminMinistraPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminMinistraPartialUpdateClient>>
  }
}
/**
 * @link /api/v1/service/admin/ministra/:id/ */
export function useApiV1ServiceAdminMinistraPartialUpdate(
  id: ApiV1ServiceAdminMinistraPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminMinistraPartialUpdate["response"], ApiV1ServiceAdminMinistraPartialUpdate["error"], ApiV1ServiceAdminMinistraPartialUpdate["request"]>
    client?: ApiV1ServiceAdminMinistraPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminMinistraPartialUpdate["response"], ApiV1ServiceAdminMinistraPartialUpdate["error"], ApiV1ServiceAdminMinistraPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminMinistraPartialUpdate["response"], ApiV1ServiceAdminMinistraPartialUpdate["error"], ApiV1ServiceAdminMinistraPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminMinistraPartialUpdate["data"], ApiV1ServiceAdminMinistraPartialUpdate["error"], ApiV1ServiceAdminMinistraPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/service/admin/ministra/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
