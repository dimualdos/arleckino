import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserNotificationsListQueryResponse } from "../../../models/ts/apiController/ApiV1UserNotificationsList"

/**
 * @description .
 * @summary Список активных общих уведомлений для пользователя
 * @link /api/v1/user/notifications/ */
export async function apiV1UserNotificationsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserNotificationsListQueryResponse>> {
  const res = await client<ApiV1UserNotificationsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/notifications/`,
    ...options,
  })
  return res
}
