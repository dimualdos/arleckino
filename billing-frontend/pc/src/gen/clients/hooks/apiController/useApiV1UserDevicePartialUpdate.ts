import client from "@/src/axios-client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  ApiV1UserDevicePartialUpdateMutationRequest,
  ApiV1UserDevicePartialUpdateMutationResponse,
  ApiV1UserDevicePartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserDevicePartialUpdate"
import type { QueryKey, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ApiV1UserDeviceListListQueryKey } from "./useApiV1UserDeviceListList"

type ApiV1UserDevicePartialUpdateClient = typeof client<ApiV1UserDevicePartialUpdateMutationResponse, never, ApiV1UserDevicePartialUpdateMutationRequest>
type ApiV1UserDevicePartialUpdate = {
  data: ApiV1UserDevicePartialUpdateMutationResponse
  error: never
  request: Partial<ApiV1UserDevicePartialUpdateMutationRequest>
  pathParams: ApiV1UserDevicePartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDevicePartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDevicePartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDevicePartialUpdateClient>>
  }
  invalidateQueries: () => void
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.* **device_cannot_deleted_while_active_subscription**Устройство может быть удалено после окончания срока действия подписки {date_end}.* **hwid_cannot_be_changed_by_the_user**HWID не может быть изменен пользователем.* **hwid_must_be_deleted_together_with_the_pairing_code**HWID должно быть удалено вместе с кодом сопряжения.* **device_pairing_code_already_exists**Указанный код сопряжения уже используется для другого устройства, укажите другой код сопряжения.
 * @summary Просмотр, изменение и удаление устройства пользователя
 * @link /api/v1/user/device/:id/ */
export function useApiV1UserDevicePartialUpdate<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  id: ApiV1UserDevicePartialUpdatePathParams["id"],
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDevicePartialUpdate["response"], ApiV1UserDevicePartialUpdate["error"], ApiV1UserDevicePartialUpdate["request"]>
    client?: ApiV1UserDevicePartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDevicePartialUpdate["response"], ApiV1UserDevicePartialUpdate["error"], ApiV1UserDevicePartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation<ApiV1UserDevicePartialUpdate["response"], ApiV1UserDevicePartialUpdate["error"], ApiV1UserDevicePartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDevicePartialUpdate["data"], ApiV1UserDevicePartialUpdate["error"], ApiV1UserDevicePartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/user/device/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    onSuccess: () => {
      clientDevices.invalidateQueries(queryKey)
    },
    ...mutationOptions,
  })
}
