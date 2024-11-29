import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesUpdateClient = typeof client<ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse, never, ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest>
type ApiV1DbTemplatesAdminTemplatesUpdate = {
  data: ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse
  error: never
  request: ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest
  pathParams: ApiV1DbTemplatesAdminTemplatesUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export function useApiV1DbTemplatesAdminTemplatesUpdate(
  id: ApiV1DbTemplatesAdminTemplatesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminTemplatesUpdate["response"], ApiV1DbTemplatesAdminTemplatesUpdate["error"], ApiV1DbTemplatesAdminTemplatesUpdate["request"]>
    client?: ApiV1DbTemplatesAdminTemplatesUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminTemplatesUpdate["response"], ApiV1DbTemplatesAdminTemplatesUpdate["error"], ApiV1DbTemplatesAdminTemplatesUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminTemplatesUpdate["response"], ApiV1DbTemplatesAdminTemplatesUpdate["error"], ApiV1DbTemplatesAdminTemplatesUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesUpdate["data"], ApiV1DbTemplatesAdminTemplatesUpdate["error"], ApiV1DbTemplatesAdminTemplatesUpdate["request"]>({
        method: "put",
        url: `/api/v1/db_templates/admin/templates/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
