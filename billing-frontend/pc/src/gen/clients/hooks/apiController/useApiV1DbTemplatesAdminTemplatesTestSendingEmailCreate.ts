import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate201,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateClient = typeof client<
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate201,
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequest
>
type ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate = {
  data: ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponse
  error: ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate201
  request: ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **html_content_or_text_content_must_be_specified**Значение для html_content или text_content должно быть указано.* **email_template_not_found**Шаблон e-mail с указанным ID {} не обнаружен.* **db_template_language_not_found**Язык шаблонов с указанным ID {} не обнаружен.* **email_template_content_not_found**Содержимое шаблона e-mail с указанным ID {} для языка шаблонов с указанным ID {} не обнаружено.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.
 * @summary Тест отправки содержимого шаблона на e-mail
 * @link /api/v1/db_templates/admin/templates/test-sending-email/ */
export function useApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate(
  options: {
    mutation?: UseMutationOptions<
      ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["response"],
      ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["error"],
      ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["request"]
    >
    client?: ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["response"],
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["error"],
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["response"],
    ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["error"],
    ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["data"],
        ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["error"],
        ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate["request"]
      >({
        method: "post",
        url: `/api/v1/db_templates/admin/templates/test-sending-email/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
