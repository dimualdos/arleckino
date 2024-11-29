import client from "@/src/axios-client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest,
  ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse,
  ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams,
  ApiV1UserDeviceSubscriptionAutoRenewCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceSubscriptionAutoRenewCreate"
import type { QueryKey, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ApiV1UserDeviceListListQueryKey } from "./useApiV1UserDeviceListList"

type ApiV1UserDeviceSubscriptionAutoRenewCreateClient = typeof client<
  ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse,
  ApiV1UserDeviceSubscriptionAutoRenewCreate201,
  ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest
>
type ApiV1UserDeviceSubscriptionAutoRenewCreate = {
  data: ApiV1UserDeviceSubscriptionAutoRenewCreateMutationResponse
  error: ApiV1UserDeviceSubscriptionAutoRenewCreate201
  request: ApiV1UserDeviceSubscriptionAutoRenewCreateMutationRequest
  pathParams: ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceSubscriptionAutoRenewCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceSubscriptionAutoRenewCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceSubscriptionAutoRenewCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_have_active_subscription**Устройство не имеет активной подписки.
 * @summary Изменение флага автоматического продления подписки для устройства
 * @link /api/v1/user/device/:id/subscription_auto_renew/ */
export function useApiV1UserDeviceSubscriptionAutoRenewCreate<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  id: ApiV1UserDeviceSubscriptionAutoRenewCreatePathParams["id"],
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceSubscriptionAutoRenewCreate["response"], ApiV1UserDeviceSubscriptionAutoRenewCreate["error"], ApiV1UserDeviceSubscriptionAutoRenewCreate["request"]>
    client?: ApiV1UserDeviceSubscriptionAutoRenewCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceSubscriptionAutoRenewCreate["response"], ApiV1UserDeviceSubscriptionAutoRenewCreate["error"], ApiV1UserDeviceSubscriptionAutoRenewCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation<ApiV1UserDeviceSubscriptionAutoRenewCreate["response"], ApiV1UserDeviceSubscriptionAutoRenewCreate["error"], ApiV1UserDeviceSubscriptionAutoRenewCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceSubscriptionAutoRenewCreate["data"], ApiV1UserDeviceSubscriptionAutoRenewCreate["error"], ApiV1UserDeviceSubscriptionAutoRenewCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/subscription_auto_renew/`,
        data,
        ...clientOptions,
      })
      return res
    },
    onSettled: async () => {
      return await clientDevices.invalidateQueries(queryKey)
    },
    onSuccess: () => {
      clientDevices.invalidateQueries(queryKey)
    },
    ...mutationOptions,
  })
}
