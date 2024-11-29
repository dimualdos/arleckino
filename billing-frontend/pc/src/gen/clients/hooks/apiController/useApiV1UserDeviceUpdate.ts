import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1UserDeviceUpdateMutationRequest, ApiV1UserDeviceUpdateMutationResponse, ApiV1UserDeviceUpdatePathParams } from "../../../models/ts/apiController/ApiV1UserDeviceUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1UserDeviceUpdateClient = typeof client<ApiV1UserDeviceUpdateMutationResponse, never, ApiV1UserDeviceUpdateMutationRequest>
type ApiV1UserDeviceUpdate = {
  data: ApiV1UserDeviceUpdateMutationResponse
  error: never
  request: ApiV1UserDeviceUpdateMutationRequest
  pathParams: ApiV1UserDeviceUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.* **device_cannot_deleted_while_active_subscription**Устройство может быть удалено после окончания срока действия подписки {date_end}.* **hwid_cannot_be_changed_by_the_user**HWID не может быть изменен пользователем.* **hwid_must_be_deleted_together_with_the_pairing_code**HWID должно быть удалено вместе с кодом сопряжения.* **device_pairing_code_already_exists**Указанный код сопряжения уже используется для другого устройства, укажите другой код сопряжения.
 * @summary Просмотр, изменение и удаление устройства пользователя
 * @link /api/v1/user/device/:id/ */
export function useApiV1UserDeviceUpdate(
  id: ApiV1UserDeviceUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceUpdate["response"], ApiV1UserDeviceUpdate["error"], ApiV1UserDeviceUpdate["request"]>
    client?: ApiV1UserDeviceUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceUpdate["response"], ApiV1UserDeviceUpdate["error"], ApiV1UserDeviceUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1UserDeviceUpdate["response"], ApiV1UserDeviceUpdate["error"], ApiV1UserDeviceUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceUpdate["data"], ApiV1UserDeviceUpdate["error"], ApiV1UserDeviceUpdate["request"]>({
        method: "put",
        url: `/api/v1/user/device/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
