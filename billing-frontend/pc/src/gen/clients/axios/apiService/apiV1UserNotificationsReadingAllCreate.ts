import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserNotificationsReadingAllCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserNotificationsReadingAllCreate"

/**
 * @description .
 * @summary Установка флага прочтения для всех общих уведомлений
 * @link /api/v1/user/notifications/reading-all */
export async function apiV1UserNotificationsReadingAllCreate(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserNotificationsReadingAllCreateMutationResponse>> {
  const res = await client<ApiV1UserNotificationsReadingAllCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/notifications/reading-all`,
    ...options,
  })
  return res
}
