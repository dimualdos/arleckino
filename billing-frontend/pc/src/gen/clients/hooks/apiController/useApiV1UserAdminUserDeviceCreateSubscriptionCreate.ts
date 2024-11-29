import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceCreateSubscriptionCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceCreateSubscriptionCreateClient = typeof client<
  ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreate201,
  ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest
>
type ApiV1UserAdminUserDeviceCreateSubscriptionCreate = {
  data: ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationResponse
  error: ApiV1UserAdminUserDeviceCreateSubscriptionCreate201
  request: ApiV1UserAdminUserDeviceCreateSubscriptionCreateMutationRequest
  pathParams: ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceCreateSubscriptionCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceCreateSubscriptionCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceCreateSubscriptionCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_has_an_active_subscription**Устройство имеет активную подписку.* **device_subscription_end_date_less_start_date**Дата окончания подписки должна быть больше даты начала.
 * @summary Создание подписки для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/create-subscription/ */
export function useApiV1UserAdminUserDeviceCreateSubscriptionCreate(
  deviceId: ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceCreateSubscriptionCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserAdminUserDeviceCreateSubscriptionCreate["response"],
      ApiV1UserAdminUserDeviceCreateSubscriptionCreate["error"],
      ApiV1UserAdminUserDeviceCreateSubscriptionCreate["request"]
    >
    client?: ApiV1UserAdminUserDeviceCreateSubscriptionCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserAdminUserDeviceCreateSubscriptionCreate["response"],
  ApiV1UserAdminUserDeviceCreateSubscriptionCreate["error"],
  ApiV1UserAdminUserDeviceCreateSubscriptionCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserAdminUserDeviceCreateSubscriptionCreate["response"],
    ApiV1UserAdminUserDeviceCreateSubscriptionCreate["error"],
    ApiV1UserAdminUserDeviceCreateSubscriptionCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserAdminUserDeviceCreateSubscriptionCreate["data"],
        ApiV1UserAdminUserDeviceCreateSubscriptionCreate["error"],
        ApiV1UserAdminUserDeviceCreateSubscriptionCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/create-subscription/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
