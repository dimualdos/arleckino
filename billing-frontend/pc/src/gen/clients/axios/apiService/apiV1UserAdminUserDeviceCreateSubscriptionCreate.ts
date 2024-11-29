import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceCreateSubscriptionCreate"

/**
 * @description Список сообщений **message_type**:* **device_has_an_active_subscription**Устройство имеет активную подписку.* **device_subscription_end_date_less_start_date**Дата окончания подписки должна быть больше даты начала.
 * @summary Создание подписки для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/create-subscription/ */
export async function apiV1UserAdminUserDeviceCreateSubscriptionCreate(
  { deviceId, id }: ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams,
  data: ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse, ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/device/${deviceId}/create-subscription/`,
    data,
    ...options,
  })
  return res
}
