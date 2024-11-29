import client from "@/src/axios-client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  ApiV1UserDeviceCheckedCreateMutationRequest,
  ApiV1UserDeviceCheckedCreateMutationResponse,
  ApiV1UserDeviceCheckedCreatePathParams,
  ApiV1UserDeviceCheckedCreate201,
} from "../../../models/ts/apiController/ApiV1UserDeviceCheckedCreate"
import type { QueryKey, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ApiV1UserDeviceListListQueryKey } from "./useApiV1UserDeviceListList"
import { Device } from "@/src/gen/models/ts/Device"

type ApiV1UserDeviceCheckedCreateClient = typeof client<ApiV1UserDeviceCheckedCreateMutationResponse, ApiV1UserDeviceCheckedCreate201, ApiV1UserDeviceCheckedCreateMutationRequest>
type ApiV1UserDeviceCheckedCreate = {
  data: ApiV1UserDeviceCheckedCreateMutationResponse
  error: ApiV1UserDeviceCheckedCreate201
  request: ApiV1UserDeviceCheckedCreateMutationRequest
  pathParams: ApiV1UserDeviceCheckedCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserDeviceCheckedCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserDeviceCheckedCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1UserDeviceCheckedCreateClient>>
  }
  invalidateQueries: () => void
}
/**
 * @description .
 * @summary Изменение флага выбора устройства пользователя
 * @link /api/v1/user/device/:id/checked/ */
export function useApiV1UserDeviceCheckedCreate<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  id: ApiV1UserDeviceCheckedCreatePathParams["id"],
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceCheckedCreate["response"], ApiV1UserDeviceCheckedCreate["error"], ApiV1UserDeviceCheckedCreate["request"]>
    client?: ApiV1UserDeviceCheckedCreate["client"]["parameters"]
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation<ApiV1UserDeviceCheckedCreate["response"], ApiV1UserDeviceCheckedCreate["error"], ApiV1UserDeviceCheckedCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1UserDeviceCheckedCreate["data"], ApiV1UserDeviceCheckedCreate["error"], ApiV1UserDeviceCheckedCreate["request"]>({
        method: "post",
        url: `/api/v1/user/device/${id}/checked/`,
        data,
        ...clientOptions,
      })
      return res
    },
    onError: (error, variables, context) => {
      console.log(`id not found. ${error}`)
      clientDevices.invalidateQueries(queryKey)
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

/**
 * @description .
 * @summary Изменение флага выбора устройства пользователя
 * @link /api/v1/user/device/:id/checked/ */
export function useApiV1UserDeviceCheckedListCreate<TQueryKey extends QueryKey = ApiV1UserDeviceListListQueryKey>(
  idArr: ApiV1UserDeviceCheckedCreatePathParams["id"][] | null,
  queryKey: TQueryKey,
  options: {
    mutation?: UseMutationOptions<ApiV1UserDeviceCheckedCreate["response"], ApiV1UserDeviceCheckedCreate["error"], ApiV1UserDeviceCheckedCreate["request"]>
    client?: ApiV1UserDeviceCheckedCreate["client"]["parameters"]
  } = {},
) {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  const clientDevices = useQueryClient()
  return useMutation<ApiV1UserDeviceCheckedCreate["response"], ApiV1UserDeviceCheckedCreate["error"], ApiV1UserDeviceCheckedCreate["request"]>({
    mutationFn: async (data) => {
      let res: any = await Promise.all(
        idArr!.map((id) =>
          client<ApiV1UserDeviceCheckedCreate["data"], ApiV1UserDeviceCheckedCreate["error"], ApiV1UserDeviceCheckedCreate["request"]>({
            method: "post",
            url: `/api/v1/user/device/${id}/checked/`,
            data,
            ...clientOptions,
          }),
        ),
      )
      return res
    },
    onError: (error) => {
      console.log(`id not found. ${error}`)
      clientDevices.invalidateQueries(queryKey)
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
