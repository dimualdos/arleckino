import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceCancelSubscriptionCreate"

/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.
 * @summary Отмена подписки для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/cancel-subscription/ */
export async function apiV1UserAdminUserDeviceCancelSubscriptionCreate(
  { deviceId, id }: ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams,
  data: ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse, ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/device/${deviceId}/cancel-subscription/`,
    data,
    ...options,
  })
  return res
}
