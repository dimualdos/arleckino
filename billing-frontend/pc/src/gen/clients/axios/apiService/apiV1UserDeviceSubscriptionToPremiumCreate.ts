import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest,
  ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse,
  ApiV1UserDeviceSubscriptionToPremiumCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDeviceSubscriptionToPremiumCreate"

/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.
 * @summary Пересчет остатка дней текущей не премиальной подписки в премиум без продления
 * @link /api/v1/user/device/:id/subscription_to_premium/ */
export async function apiV1UserDeviceSubscriptionToPremiumCreate(
  { id }: ApiV1UserDeviceSubscriptionToPremiumCreatePathParams,
  data?: ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse, ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/subscription_to_premium/`,
    data,
    ...options,
  })
  return res
}
