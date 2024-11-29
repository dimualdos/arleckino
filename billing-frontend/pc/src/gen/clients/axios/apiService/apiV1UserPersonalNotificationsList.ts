import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserPersonalNotificationsListQueryResponse } from "../../../models/ts/apiController/ApiV1UserPersonalNotificationsList"

/**
 * @description .
 * @summary Список активных персональных уведомлений для пользователя
 * @link /api/v1/user/personal-notifications/ */
export async function apiV1UserPersonalNotificationsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserPersonalNotificationsListQueryResponse>> {
  const res = await client<ApiV1UserPersonalNotificationsListQueryResponse>({
    method: "get",
    url: `/api/v1/user/personal-notifications/`,
    ...options,
  })
  return res
}
