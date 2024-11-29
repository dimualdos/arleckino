import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceChangeSubscriptionCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceChangeSubscriptionCreateClient = typeof client<
  ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreate201,
  ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest
>
type ApiV1UserAdminUserDeviceChangeSubscriptionCreate = {
  data: ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationResponse
  error: ApiV1UserAdminUserDeviceChangeSubscriptionCreate201
  request: ApiV1UserAdminUserDeviceChangeSubscriptionCreateMutationRequest
  pathParams: ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceChangeSubscriptionCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceChangeSubscriptionCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceChangeSubscriptionCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.* **device_subscription_end_date_less_start_date**Дата окончания подписки должна быть больше даты начала.
 * @summary Изменение даты действия подписки для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/change-subscription/ */
export function useApiV1UserAdminUserDeviceChangeSubscriptionCreate(
  deviceId: ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceChangeSubscriptionCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserAdminUserDeviceChangeSubscriptionCreate["response"],
      ApiV1UserAdminUserDeviceChangeSubscriptionCreate["error"],
      ApiV1UserAdminUserDeviceChangeSubscriptionCreate["request"]
    >
    client?: ApiV1UserAdminUserDeviceChangeSubscriptionCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserAdminUserDeviceChangeSubscriptionCreate["response"],
  ApiV1UserAdminUserDeviceChangeSubscriptionCreate["error"],
  ApiV1UserAdminUserDeviceChangeSubscriptionCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserAdminUserDeviceChangeSubscriptionCreate["response"],
    ApiV1UserAdminUserDeviceChangeSubscriptionCreate["error"],
    ApiV1UserAdminUserDeviceChangeSubscriptionCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserAdminUserDeviceChangeSubscriptionCreate["data"],
        ApiV1UserAdminUserDeviceChangeSubscriptionCreate["error"],
        ApiV1UserAdminUserDeviceChangeSubscriptionCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/change-subscription/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
