import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserPersonalNotificationsReadingCreateMutationResponse,
  ApiV1UserPersonalNotificationsReadingCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserPersonalNotificationsReadingCreate"

/**
 * @description Список сообщений **message_type**:* **personal_notification_belongs_to_another_user**Персональное уведомление {title} принадлежит другому пользователю.
 * @summary Установка флага прочтения для персонального уведомления
 * @link /api/v1/user/personal-notifications/:id/reading */
export async function apiV1UserPersonalNotificationsReadingCreate(
  { id }: ApiV1UserPersonalNotificationsReadingCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserPersonalNotificationsReadingCreateMutationResponse>> {
  const res = await client<ApiV1UserPersonalNotificationsReadingCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/personal-notifications/${id}/reading`,
    ...options,
  })
  return res
}
