import client from "@/src/axios-client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { ApiV1UserDeviceCheckAllUpdateMutationRequest, ApiV1UserDeviceCheckAllUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserDeviceCheckAllUpdate"
import type { QueryKey, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ApiV1UserDeviceListListQueryKey } from "./useApiV1UserDeviceListList"

type ApiV1UserDeviceCheckAllUpdateClient = typeof client<ApiV1UserDeviceCheckAllUpdateMutationResponse, never, ApiV1UserDeviceCheckAllUpdateMutationRequest>
type ApiV1UserDeviceCheckAllUpdate = {
  data: ApiV1UserDeviceCheckAllUpdateMutationResponse
  error: never
  request: ApiV1UserDeviceCheckAllUpdateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceCheckAllUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceCheckAllUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceCheckAllUpdateClient>>
  }
}
/**
 * @description .
 * @summary Изменение флага выбора всех устройств пользователя
 * @link /api/v1/user/device/check_all/ */
export function useApiV1UserDeviceCheckAllUpdate<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceCheckAllUpdate["response"], ApiV1UserDeviceCheckAllUpdate["error"], ApiV1UserDeviceCheckAllUpdate["request"]>
    client?: ApiV1UserDeviceCheckAllUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceCheckAllUpdate["response"], ApiV1UserDeviceCheckAllUpdate["error"], ApiV1UserDeviceCheckAllUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation<ApiV1UserDeviceCheckAllUpdate["response"], ApiV1UserDeviceCheckAllUpdate["error"], ApiV1UserDeviceCheckAllUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceCheckAllUpdate["data"], ApiV1UserDeviceCheckAllUpdate["error"], ApiV1UserDeviceCheckAllUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/device/check_all/`,
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
