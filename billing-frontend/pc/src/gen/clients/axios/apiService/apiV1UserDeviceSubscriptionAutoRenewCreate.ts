import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest,
  ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse,
  ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDeviceSubscriptionAutoRenewCreate"

/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.
 * @summary Изменение флага автоматического продления подписки для устройства
 * @link /api/v1/user/device/:id/subscription_auto_renew/ */
export async function apiV1UserDeviceSubscriptionAutoRenewCreate(
  { id }: ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams,
  data: ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse>> {
  const res = await client<ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse, ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/device/${id}/subscription_auto_renew/`,
    data,
    ...options,
  })
  return res
}
