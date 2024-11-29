import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserProfileUnsubscribeMailListCreateMutationRequest,
  ApiV1UserProfileUnsubscribeMailListCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1UserProfileUnsubscribeMailListCreate"

/**
 * @description Список сообщений **message_type**:* **unsubscribe_mail_list_token_invalid**Указан некорректный токен для отмены подписки на рассылку.* **unsubscribe_mail_list_email_invalid**Указанный e-mail не совпадает с e-mail пользователя.* **unsubscribe_mail_list_already_completed**Отмена подписки на рассылку уже выполнена.
 * @summary Отписаться от рассылки
 * @link /api/v1/user/profile/unsubscribe-mail-list */
export async function apiV1UserProfileUnsubscribeMailListCreate(
  data: ApiV1UserProfileUnsubscribeMailListCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserProfileUnsubscribeMailListCreateMutationResponse>> {
  const res = await client<ApiV1UserProfileUnsubscribeMailListCreateMutationResponse, ApiV1UserProfileUnsubscribeMailListCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/profile/unsubscribe-mail-list`,
    data,
    ...options,
  })
  return res
}
