import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesUpdateClient = typeof client<ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse, never, ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest>
type ApiV1DbTemplatesAdminEmailTemplatesUpdate = {
  data: ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse
  error: never
  request: ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest
  pathParams: ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export function useApiV1DbTemplatesAdminEmailTemplatesUpdate(
  id: ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminEmailTemplatesUpdate["response"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["error"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["request"]>
    client?: ApiV1DbTemplatesAdminEmailTemplatesUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminEmailTemplatesUpdate["response"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["error"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminEmailTemplatesUpdate["response"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["error"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesUpdate["data"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["error"], ApiV1DbTemplatesAdminEmailTemplatesUpdate["request"]>({
        method: "put",
        url: `/api/v1/db_templates/admin/email-templates/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
