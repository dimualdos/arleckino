import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponse,
  ApiV1DbTemplatesAdminTemplatesImagesDeletePathParams,
  ApiV1DbTemplatesAdminTemplatesImagesDelete204,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesImagesDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesImagesDeleteClient = typeof client<ApiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponse, ApiV1DbTemplatesAdminTemplatesImagesDelete204, never>
type ApiV1DbTemplatesAdminTemplatesImagesDelete = {
  data: ApiV1DbTemplatesAdminTemplatesImagesDeleteMutationResponse
  error: ApiV1DbTemplatesAdminTemplatesImagesDelete204
  request: never
  pathParams: ApiV1DbTemplatesAdminTemplatesImagesDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesImagesDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesImagesDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesImagesDeleteClient>>
  }
}
/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона
 * @link /api/v1/db_templates/admin/templates/images/:id/ */
export function useApiV1DbTemplatesAdminTemplatesImagesDelete(
  id: ApiV1DbTemplatesAdminTemplatesImagesDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminTemplatesImagesDelete["response"], ApiV1DbTemplatesAdminTemplatesImagesDelete["error"], void>
    client?: ApiV1DbTemplatesAdminTemplatesImagesDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminTemplatesImagesDelete["response"], ApiV1DbTemplatesAdminTemplatesImagesDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminTemplatesImagesDelete["response"], ApiV1DbTemplatesAdminTemplatesImagesDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesImagesDelete["data"], ApiV1DbTemplatesAdminTemplatesImagesDelete["error"], void>({
        method: "delete",
        url: `/api/v1/db_templates/admin/templates/images/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
