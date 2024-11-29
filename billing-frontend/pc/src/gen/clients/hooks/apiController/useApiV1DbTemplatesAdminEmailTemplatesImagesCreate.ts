import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreate201,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesImagesCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesImagesCreateClient = typeof client<
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreate201,
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest
>
type ApiV1DbTemplatesAdminEmailTemplatesImagesCreate = {
  data: ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse
  error: ApiV1DbTemplatesAdminEmailTemplatesImagesCreate201
  request: ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesImagesCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesImagesCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesImagesCreateClient>>
  }
}
/**
 * @description .
 * @summary Загрузка, удаление изображения для содержимого шаблона email
 * @link /api/v1/db_templates/admin/email-templates/images/ */
export function useApiV1DbTemplatesAdminEmailTemplatesImagesCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["response"],
      ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["error"],
      ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["request"]
    >
    client?: ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["response"],
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["error"],
  ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["response"], ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["error"], ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["request"]>(
    {
      mutationFn: async (data) => {
        const res = await client<
          ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["data"],
          ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["error"],
          ApiV1DbTemplatesAdminEmailTemplatesImagesCreate["request"]
        >({
          method: "post",
          url: `/api/v1/db_templates/admin/email-templates/images/`,
          data,
          ...clientOptions,
        })
        return res
      },
      ...mutationOptions,
    },
  )
}
