import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesImagesDeletePathParams,
  ApiV1DbTemplatesAdminEmailTemplatesImagesDelete204,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesImagesDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteClient = typeof client<ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponse, ApiV1DbTemplatesAdminEmailTemplatesImagesDelete204, never>
type ApiV1DbTemplatesAdminEmailTemplatesImagesDelete = {
  data: ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteMutationResponse
  error: ApiV1DbTemplatesAdminEmailTemplatesImagesDelete204
  request: never
  pathParams: ApiV1DbTemplatesAdminEmailTemplatesImagesDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesImagesDeleteClient>>
  }
}
/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона email
 * @link /api/v1/db_templates/admin/email-templates/images/:id/ */
export function useApiV1DbTemplatesAdminEmailTemplatesImagesDelete(
  id: ApiV1DbTemplatesAdminEmailTemplatesImagesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["response"], ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["error"], void>
    client?: ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["response"], ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["response"], ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["data"], ApiV1DbTemplatesAdminEmailTemplatesImagesDelete["error"], void>({
        method: "delete",
        url: `/api/v1/db_templates/admin/email-templates/images/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
