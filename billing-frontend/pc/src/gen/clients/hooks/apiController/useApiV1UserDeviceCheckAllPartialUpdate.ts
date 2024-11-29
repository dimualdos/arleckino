import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserDeviceCheckAllPartialUpdateMutationRequest, ApiV1UserDeviceCheckAllPartialUpdateMutationResponse } from "../../../models/ts/apiController/ApiV1UserDeviceCheckAllPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceCheckAllPartialUpdateClient = typeof client<ApiV1UserDeviceCheckAllPartialUpdateMutationResponse, never, ApiV1UserDeviceCheckAllPartialUpdateMutationRequest>
type ApiV1UserDeviceCheckAllPartialUpdate = {
  data: ApiV1UserDeviceCheckAllPartialUpdateMutationResponse
  error: never
  request: ApiV1UserDeviceCheckAllPartialUpdateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceCheckAllPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceCheckAllPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceCheckAllPartialUpdateClient>>
  }
}
/**
 * @description .
 * @summary Изменение флага выбора всех устройств пользователя
 * @link /api/v1/user/device/check_all/ */
export function useApiV1UserDeviceCheckAllPartialUpdate(
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceCheckAllPartialUpdate["response"], ApiV1UserDeviceCheckAllPartialUpdate["error"], ApiV1UserDeviceCheckAllPartialUpdate["request"]>
    client?: ApiV1UserDeviceCheckAllPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceCheckAllPartialUpdate["response"], ApiV1UserDeviceCheckAllPartialUpdate["error"], ApiV1UserDeviceCheckAllPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceCheckAllPartialUpdate["response"], ApiV1UserDeviceCheckAllPartialUpdate["error"], ApiV1UserDeviceCheckAllPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceCheckAllPartialUpdate["data"], ApiV1UserDeviceCheckAllPartialUpdate["error"], ApiV1UserDeviceCheckAllPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/device/check_all/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
