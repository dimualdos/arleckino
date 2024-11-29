import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest,
  ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesCreate201,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminEmailTemplatesCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminEmailTemplatesCreateClient = typeof client<
  ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse,
  ApiV1DbTemplatesAdminEmailTemplatesCreate201,
  ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest
>
type ApiV1DbTemplatesAdminEmailTemplatesCreate = {
  data: ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse
  error: ApiV1DbTemplatesAdminEmailTemplatesCreate201
  request: ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminEmailTemplatesCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminEmailTemplatesCreateClient>>
  }
}
/**
 * @description .
 * @summary Список шаблонов email, создание нового шаблона
 * @link /api/v1/db_templates/admin/email-templates/ */
export function useApiV1DbTemplatesAdminEmailTemplatesCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1DbTemplatesAdminEmailTemplatesCreate["response"], ApiV1DbTemplatesAdminEmailTemplatesCreate["error"], ApiV1DbTemplatesAdminEmailTemplatesCreate["request"]>
    client?: ApiV1DbTemplatesAdminEmailTemplatesCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1DbTemplatesAdminEmailTemplatesCreate["response"], ApiV1DbTemplatesAdminEmailTemplatesCreate["error"], ApiV1DbTemplatesAdminEmailTemplatesCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1DbTemplatesAdminEmailTemplatesCreate["response"], ApiV1DbTemplatesAdminEmailTemplatesCreate["error"], ApiV1DbTemplatesAdminEmailTemplatesCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1DbTemplatesAdminEmailTemplatesCreate["data"], ApiV1DbTemplatesAdminEmailTemplatesCreate["error"], ApiV1DbTemplatesAdminEmailTemplatesCreate["request"]>({
        method: "post",
        url: `/api/v1/db_templates/admin/email-templates/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
