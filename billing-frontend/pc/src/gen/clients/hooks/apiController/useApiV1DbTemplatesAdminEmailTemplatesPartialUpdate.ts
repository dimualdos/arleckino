import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateClient = typeof client<
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse,
  never,
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest
>
type ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate = {
  data: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse
  error: never
  request: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest
  pathParams: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Просмотр, изменение, удаление шаблона
 * @link /api/v1/db_templates/admin/email-templates/:id/ */
export function useApiV1DbTemplatesAdminEmailTemplatesPartialUpdate(
  id: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["response"],
      ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["error"],
      ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["request"]
    >
    client?: ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["response"],
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["error"],
  ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["response"],
    ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["error"],
    ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["data"],
        ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["error"],
        ApiV1DbTemplatesAdminEmailTemplatesPartialUpdate["request"]
      >({
        method: "patch",
        url: `/api/v1/db_templates/admin/email-templates/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
