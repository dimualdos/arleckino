import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserFrontendLanguageCreateMutationRequest,
  ApiV1UserFrontendLanguageCreateMutationResponse,
  ApiV1UserFrontendLanguageCreate201,
} from "../../../models/ts/apiController/ApiV1UserFrontendLanguageCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserFrontendLanguageCreateClient = typeof client<ApiV1UserFrontendLanguageCreateMutationResponse, ApiV1UserFrontendLanguageCreate201, ApiV1UserFrontendLanguageCreateMutationRequest>
type ApiV1UserFrontendLanguageCreate = {
  data: ApiV1UserFrontendLanguageCreateMutationResponse
  error: ApiV1UserFrontendLanguageCreate201
  request: ApiV1UserFrontendLanguageCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserFrontendLanguageCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserFrontendLanguageCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserFrontendLanguageCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **db_template_language_not_found**Язык шаблонов с указанным кодом {0} не обнаружен.* **user_frontend_language_is_equal_to_current**Язык просмотра сайта с указанным кодом {0} совпадает с текущим {1}.
 * @summary Изменение языка просмотра сайта
 * @link /api/v1/user/frontend-language/ */
export function useApiV1UserFrontendLanguageCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserFrontendLanguageCreate["response"], ApiV1UserFrontendLanguageCreate["error"], ApiV1UserFrontendLanguageCreate["request"]>
    client?: ApiV1UserFrontendLanguageCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserFrontendLanguageCreate["response"], ApiV1UserFrontendLanguageCreate["error"], ApiV1UserFrontendLanguageCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserFrontendLanguageCreate["response"], ApiV1UserFrontendLanguageCreate["error"], ApiV1UserFrontendLanguageCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserFrontendLanguageCreate["data"], ApiV1UserFrontendLanguageCreate["error"], ApiV1UserFrontendLanguageCreate["request"]>({
        method: "post",
        url: `/api/v1/user/frontend-language/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
