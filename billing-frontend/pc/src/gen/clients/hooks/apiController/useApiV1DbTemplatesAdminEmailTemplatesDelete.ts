import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesDeletePathParams,
  ApiV1DbTemplatesAdminEmailTemplatesDelete204,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesDeleteClient = typeof client<ApiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponse, ApiV1DbTemplatesAdminEmailTemplatesDelete204, never>
type ApiV1DbTemplatesAdminEmailTemplatesDelete = {
  data: ApiV1DbTemplatesAdminEmailTemplatesDeleteMutationResponse
  error: ApiV1DbTemplatesAdminEmailTemplatesDelete204
  request: never
  pathParams: ApiV1DbTemplatesAdminEmailTemplatesDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesDeleteClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export function useApiV1DbTemplatesAdminEmailTemplatesDelete(
  id: ApiV1DbTemplatesAdminEmailTemplatesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminEmailTemplatesDelete["response"], ApiV1DbTemplatesAdminEmailTemplatesDelete["error"], void>
    client?: ApiV1DbTemplatesAdminEmailTemplatesDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminEmailTemplatesDelete["response"], ApiV1DbTemplatesAdminEmailTemplatesDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminEmailTemplatesDelete["response"], ApiV1DbTemplatesAdminEmailTemplatesDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesDelete["data"], ApiV1DbTemplatesAdminEmailTemplatesDelete["error"], void>({
        method: "delete",
        url: `/api/v1/db_templates/admin/email-templates/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
