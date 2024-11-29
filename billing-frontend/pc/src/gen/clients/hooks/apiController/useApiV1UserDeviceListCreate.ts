import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserDeviceListCreateMutationRequest, ApiV1UserDeviceListCreateMutationResponse, ApiV1UserDeviceListCreate201 } from "../../../models/ts/apiController/ApiV1UserDeviceListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceListCreateClient = typeof client<ApiV1UserDeviceListCreateMutationResponse, ApiV1UserDeviceListCreate201, ApiV1UserDeviceListCreateMutationRequest>
type ApiV1UserDeviceListCreate = {
  data: ApiV1UserDeviceListCreateMutationResponse
  error: ApiV1UserDeviceListCreate201
  request: ApiV1UserDeviceListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceListCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.
 * @summary Список устройств, создание нового устройства
 * @link /api/v1/user/device/list/ */
export function useApiV1UserDeviceListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceListCreate["response"], ApiV1UserDeviceListCreate["error"], ApiV1UserDeviceListCreate["request"]>
    client?: ApiV1UserDeviceListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceListCreate["response"], ApiV1UserDeviceListCreate["error"], ApiV1UserDeviceListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceListCreate["response"], ApiV1UserDeviceListCreate["error"], ApiV1UserDeviceListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceListCreate["data"], ApiV1UserDeviceListCreate["error"], ApiV1UserDeviceListCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
