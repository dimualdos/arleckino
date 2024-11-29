import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserPersonalNotificationsReadingAllCreateMutationResponse } from "../../../models/ts/apiController/ApiV1UserPersonalNotificationsReadingAllCreate"

/**
 * @description .
 * @summary Установка флага прочтения для всех персональных уведомлений
 * @link /api/v1/user/personal-notifications/reading-all */
export async function apiV1UserPersonalNotificationsReadingAllCreate(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserPersonalNotificationsReadingAllCreateMutationResponse>> {
  const res = await client<ApiV1UserPersonalNotificationsReadingAllCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/personal-notifications/reading-all`,
    ...options,
  })
  return res
}
