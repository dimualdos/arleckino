import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreate201,
} from "../../../models/ts/apiController/ApiV1UserAdminUserDeviceCancelSubscriptionCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserAdminUserDeviceCancelSubscriptionCreateClient = typeof client<
  ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreate201,
  ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest
>
type ApiV1UserAdminUserDeviceCancelSubscriptionCreate = {
  data: ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationResponse
  error: ApiV1UserAdminUserDeviceCancelSubscriptionCreate201
  request: ApiV1UserAdminUserDeviceCancelSubscriptionCreateMutationRequest
  pathParams: ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserDeviceCancelSubscriptionCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserDeviceCancelSubscriptionCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserDeviceCancelSubscriptionCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.
 * @summary Отмена подписки для устройства пользователя
 * @link /api/v1/user/admin/user/:id/device/:deviceId/cancel-subscription/ */
export function useApiV1UserAdminUserDeviceCancelSubscriptionCreate(
  deviceId: ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams["deviceId"],
  id: ApiV1UserAdminUserDeviceCancelSubscriptionCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<
      ApiV1UserAdminUserDeviceCancelSubscriptionCreate["response"],
      ApiV1UserAdminUserDeviceCancelSubscriptionCreate["error"],
      ApiV1UserAdminUserDeviceCancelSubscriptionCreate["request"]
    >
    client?: ApiV1UserAdminUserDeviceCancelSubscriptionCreate["client"]["parameters"]
  } = {},
): UseMutationResult<
  ApiV1UserAdminUserDeviceCancelSubscriptionCreate["response"],
  ApiV1UserAdminUserDeviceCancelSubscriptionCreate["error"],
  ApiV1UserAdminUserDeviceCancelSubscriptionCreate["request"]
> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<
    ApiV1UserAdminUserDeviceCancelSubscriptionCreate["response"],
    ApiV1UserAdminUserDeviceCancelSubscriptionCreate["error"],
    ApiV1UserAdminUserDeviceCancelSubscriptionCreate["request"]
  >({
    mutationFn: async (data) => {
      const res = await client<
        ApiV1UserAdminUserDeviceCancelSubscriptionCreate["data"],
        ApiV1UserAdminUserDeviceCancelSubscriptionCreate["error"],
        ApiV1UserAdminUserDeviceCancelSubscriptionCreate["request"]
      >({
        method: "post",
        url: `/api/v1/user/admin/user/${id}/device/${deviceId}/cancel-subscription/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
