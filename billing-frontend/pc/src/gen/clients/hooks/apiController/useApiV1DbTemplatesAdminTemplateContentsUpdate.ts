import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplateContentsUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplateContentsUpdateClient = typeof client<ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse, never, ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest>
type ApiV1DbTemplatesAdminTemplateContentsUpdate = {
  data: ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse
  error: never
  request: ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest
  pathParams: ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplateContentsUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplateContentsUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplateContentsUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export function useApiV1DbTemplatesAdminTemplateContentsUpdate(
  id: ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminTemplateContentsUpdate["response"], ApiV1DbTemplatesAdminTemplateContentsUpdate["error"], ApiV1DbTemplatesAdminTemplateContentsUpdate["request"]>
    client?: ApiV1DbTemplatesAdminTemplateContentsUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminTemplateContentsUpdate["response"], ApiV1DbTemplatesAdminTemplateContentsUpdate["error"], ApiV1DbTemplatesAdminTemplateContentsUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminTemplateContentsUpdate["response"], ApiV1DbTemplatesAdminTemplateContentsUpdate["error"], ApiV1DbTemplatesAdminTemplateContentsUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1DbTemplatesAdminTemplateContentsUpdate["data"], ApiV1DbTemplatesAdminTemplateContentsUpdate["error"], ApiV1DbTemplatesAdminTemplateContentsUpdate["request"]>({
        method: "put",
        url: `/api/v1/db_templates/admin/template-contents/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
