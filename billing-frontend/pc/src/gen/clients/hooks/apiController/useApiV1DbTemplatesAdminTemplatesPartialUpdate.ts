import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesPartialUpdateClient = typeof client<ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse, never, ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest>
type ApiV1DbTemplatesAdminTemplatesPartialUpdate = {
  data: ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse
  error: never
  request: ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest
  pathParams: ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export function useApiV1DbTemplatesAdminTemplatesPartialUpdate(
  id: ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminTemplatesPartialUpdate["response"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["error"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["request"]>
    client?: ApiV1DbTemplatesAdminTemplatesPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminTemplatesPartialUpdate["response"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["error"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminTemplatesPartialUpdate["response"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["error"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesPartialUpdate["data"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["error"], ApiV1DbTemplatesAdminTemplatesPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/db_templates/admin/templates/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
