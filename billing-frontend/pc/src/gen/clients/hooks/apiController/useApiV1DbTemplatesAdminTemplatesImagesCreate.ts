import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesImagesCreate201,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesImagesCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesImagesCreateClient = typeof client<
  ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesImagesCreate201,
  ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest
>
type ApiV1DbTemplatesAdminTemplatesImagesCreate = {
  data: ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse
  error: ApiV1DbTemplatesAdminTemplatesImagesCreate201
  request: ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesImagesCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesImagesCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesImagesCreateClient>>
  }
}
/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона
 * @link /api/v1/db_templates/admin/templates/images/ */
export function useApiV1DbTemplatesAdminTemplatesImagesCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminTemplatesImagesCreate["response"], ApiV1DbTemplatesAdminTemplatesImagesCreate["error"], ApiV1DbTemplatesAdminTemplatesImagesCreate["request"]>
    client?: ApiV1DbTemplatesAdminTemplatesImagesCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminTemplatesImagesCreate["response"], ApiV1DbTemplatesAdminTemplatesImagesCreate["error"], ApiV1DbTemplatesAdminTemplatesImagesCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminTemplatesImagesCreate["response"], ApiV1DbTemplatesAdminTemplatesImagesCreate["error"], ApiV1DbTemplatesAdminTemplatesImagesCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1DbTemplatesAdminTemplatesImagesCreate["data"], ApiV1DbTemplatesAdminTemplatesImagesCreate["error"], ApiV1DbTemplatesAdminTemplatesImagesCreate["request"]>({
        method: "post",
        url: `/api/v1/db_templates/admin/templates/images/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
