import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserNotificationsReadingCreateMutationResponse, ApiV1UserNotificationsReadingCreatePathParams } from "../../../models/ts/apiController/ApiV1UserNotificationsReadingCreate"

/**
 * @description .
 * @summary Установка флага прочтения для общего уведомления
 * @link /api/v1/user/notifications/:id/reading */
export async function apiV1UserNotificationsReadingCreate(
  { id }: ApiV1UserNotificationsReadingCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserNotificationsReadingCreateMutationResponse>> {
  const res = await client<ApiV1UserNotificationsReadingCreateMutationResponse>({
    method: "post",
    url: `/api/v1/user/notifications/${id}/reading`,
    ...options,
  })
  return res
}
