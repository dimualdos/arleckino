import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceChangeSubscriptionCreate"

/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.* **device_subscription_end_date_less_start_date**Дата окончания подписки должна быть больше даты начала.
 * @summary Изменение даты действия подписки для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/change-subscription/ */
export async function apiV1UserAdminUserDeviceChangeSubscriptionCreate(
  { deviceId, id }: ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams,
  data: ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse, ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/device/${deviceId}/change-subscription/`,
    data,
    ...options,
  })
  return res
}
