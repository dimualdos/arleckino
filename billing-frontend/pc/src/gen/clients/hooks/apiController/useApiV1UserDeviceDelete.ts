import client from "@/src/axios-client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { ApiV1UserDeviceDeleteMutationResponse, ApiV1UserDeviceDeletePathParams, ApiV1UserDeviceDelete204 } from "../../../models/ts/apiController/ApiV1UserDeviceDelete"
import type { QueryKey, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ApiV1UserDeviceListListQueryKey } from "./useApiV1UserDeviceListList"

type ApiV1UserDeviceDeleteClient = typeof client<ApiV1UserDeviceDeleteMutationResponse, ApiV1UserDeviceDelete204, never>
type ApiV1UserDeviceDelete = {
  data: ApiV1UserDeviceDeleteMutationResponse
  error: ApiV1UserDeviceDelete204
  request: never
  pathParams: ApiV1UserDeviceDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.* **device_cannot_deleted_while_active_subscription**Устройство может быть удалено после окончания срока действия подписки {date_end}.* **hwid_cannot_be_changed_by_the_user**HWID не может быть изменен пользователем.* **hwid_must_be_deleted_together_with_the_pairing_code**HWID должно быть удалено вместе с кодом сопряжения.* **device_pairing_code_already_exists**Указанный код сопряжения уже используется для другого устройства, укажите другой код сопряжения.
 * @summary Просмотр, изменение и удаление устройства пользователя
 * @link /api/v1/user/device/:id/ */
export function useApiV1UserDeviceDelete<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  id: ApiV1UserDeviceDeletePathParams["id"],
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceDelete["response"], ApiV1UserDeviceDelete["error"], void>
    client?: ApiV1UserDeviceDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceDelete["response"], ApiV1UserDeviceDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      const res = await client<ApiV1UserDeviceDelete["data"], ApiV1UserDeviceDelete["error"], void>({
        method: "delete",
        url: `/api/v1/user/device/${id}/`,
        ...clientOptions,
      })
      return res
    },
    onSuccess: () => {
      clientDevices.invalidateQueries(queryKey)
    },
    onSettled: async () => {
      return await clientDevices.invalidateQueries(queryKey)
    },
    onError: (error, context) => {
      console.log(`id  ${context} not found. ${error}`)
      clientDevices.invalidateQueries(queryKey)
    },
    ...mutationOptions,
  })
}

//* массовое удаление устройств пользователя
export function useApiV1UserDevicesDelete<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  idArr: ApiV1UserDeviceDeletePathParams["id"][],
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceDelete["response"], ApiV1UserDeviceDelete["error"], void>
    client?: ApiV1UserDeviceDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1UserDeviceDelete["response"], ApiV1UserDeviceDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      const res: any = await Promise.all(
        idArr.map((id) => {
          client<ApiV1UserDeviceDelete["data"], ApiV1UserDeviceDelete["error"], void>({
            method: "delete",
            url: `/api/v1/user/device/${id}/`,
            ...clientOptions,
          })
        }),
      )
      return res
    },
    onSettled: async () => {
      return await clientDevices.invalidateQueries(queryKey)
    },
    onSuccess: () => {
      clientDevices.invalidateQueries(queryKey)
    },
    onError: (error) => {
      console.log(`id not found. ${error}`)
      clientDevices.invalidateQueries(queryKey)
    },
    ...mutationOptions,
  })
}
