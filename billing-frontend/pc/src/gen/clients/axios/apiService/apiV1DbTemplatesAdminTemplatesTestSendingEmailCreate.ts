import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreate"

/**
 * @description Список сообщений **message_type**:* **html_content_or_text_content_must_be_specified**Значение для html_content или text_content должно быть указано.* **email_template_not_found**Шаблон e-mail с указанным ID {} не обнаружен.* **db_template_language_not_found**Язык шаблонов с указанным ID {} не обнаружен.* **email_template_content_not_found**Содержимое шаблона e-mail с указанным ID {} для языка шаблонов с указанным ID {} не обнаружено.* **user_email_not_send_message**Ошибка отправки сообщения на email пользователя.
 * @summary Тест отправки содержимого шаблона на e-mail
 * @link /api/v1/db_templates/admin/templates/test-sending-email/ */
export async function apiV1DbTemplatesAdminTemplatesTestSendingEmailCreate(
  data: ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationResponse, ApiV1DbTemplatesAdminTemplatesTestSendingEmailCreateMutationRequest>({
    method: "post",
    url: `/api/v1/db_templates/admin/templates/test-sending-email/`,
    data,
    ...options,
  })
  return res
}
