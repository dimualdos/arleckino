import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest,
  ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse,
  ApiV1UserDeviceSubscriptionToPremiumCreatePathParams,
  ApiV1UserDeviceSubscriptionToPremiumCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceSubscriptionToPremiumCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceSubscriptionToPremiumCreateClient = typeof client<
  ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse,
  ApiV1UserDeviceSubscriptionToPremiumCreate201,
  ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest
>
type ApiV1UserDeviceSubscriptionToPremiumCreate = {
  data: ApiV1UserDeviceSubscriptionToPremiumCreateMutationResponse
  error: ApiV1UserDeviceSubscriptionToPremiumCreate201
  request: ApiV1UserDeviceSubscriptionToPremiumCreateMutationRequest
  pathParams: ApiV1UserDeviceSubscriptionToPremiumCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceSubscriptionToPremiumCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceSubscriptionToPremiumCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceSubscriptionToPremiumCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.
 * @summary Пересчет остатка дней текущей не премиальной подписки в премиум без продления
 * @link /api/v1/user/device/:id/subscription_to_premium/ */
export function useApiV1UserDeviceSubscriptionToPremiumCreate(
  id: ApiV1UserDeviceSubscriptionToPremiumCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceSubscriptionToPremiumCreate["response"], ApiV1UserDeviceSubscriptionToPremiumCreate["error"], ApiV1UserDeviceSubscriptionToPremiumCreate["request"]>
    client?: ApiV1UserDeviceSubscriptionToPremiumCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceSubscriptionToPremiumCreate["response"], ApiV1UserDeviceSubscriptionToPremiumCreate["error"], ApiV1UserDeviceSubscriptionToPremiumCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceSubscriptionToPremiumCreate["response"], ApiV1UserDeviceSubscriptionToPremiumCreate["error"], ApiV1UserDeviceSubscriptionToPremiumCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceSubscriptionToPremiumCreate["data"], ApiV1UserDeviceSubscriptionToPremiumCreate["error"], ApiV1UserDeviceSubscriptionToPremiumCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/subscription_to_premium/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
