import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplateContentsPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplateContentsPartialUpdateClient = typeof client<
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse,
  never,
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest
>
type ApiV1DbTemplatesAdminTemplateContentsPartialUpdate = {
  data: ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse
  error: never
  request: ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest
  pathParams: ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplateContentsPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplateContentsPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplateContentsPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение содержимого шаблона
 * @link /api/v1/db_templates/admin/template-contents/:id/ */
export function useApiV1DbTemplatesAdminTemplateContentsPartialUpdate(
  id: ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["response"],
      ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["error"],
      ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["request"]
    >
    client?: ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["response"],
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["error"],
  ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["response"],
    ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["error"],
    ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["data"],
        ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["error"],
        ApiV1DbTemplatesAdminTemplateContentsPartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/db_templates/admin/template-contents/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
