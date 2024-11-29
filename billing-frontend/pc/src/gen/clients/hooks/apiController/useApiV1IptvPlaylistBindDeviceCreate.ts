import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvPlaylistBindDeviceCreateMutationRequest,
  ApiV1IptvPlaylistBindDeviceCreateMutationResponse,
  ApiV1IptvPlaylistBindDeviceCreatePathParams,
  ApiV1IptvPlaylistBindDeviceCreate201,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistBindDeviceCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvPlaylistBindDeviceCreateClient = typeof client<ApiV1IptvPlaylistBindDeviceCreateMutationResponse, ApiV1IptvPlaylistBindDeviceCreate201, ApiV1IptvPlaylistBindDeviceCreateMutationRequest>
type ApiV1IptvPlaylistBindDeviceCreate = {
  data: ApiV1IptvPlaylistBindDeviceCreateMutationResponse
  error: ApiV1IptvPlaylistBindDeviceCreate201
  request: ApiV1IptvPlaylistBindDeviceCreateMutationRequest
  pathParams: ApiV1IptvPlaylistBindDeviceCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvPlaylistBindDeviceCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvPlaylistBindDeviceCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvPlaylistBindDeviceCreateClient>>
  }
}
/**
 * @description Связывание плейлиста (pk) и устройства (device_pk)
 * @link /api/v1/iptv/playlist/:id/bind_device/:device_pk/ */
export function useApiV1IptvPlaylistBindDeviceCreate(
  devicePk: ApiV1IptvPlaylistBindDeviceCreatePathParams["device_pk"],
  id: ApiV1IptvPlaylistBindDeviceCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvPlaylistBindDeviceCreate["response"], ApiV1IptvPlaylistBindDeviceCreate["error"], ApiV1IptvPlaylistBindDeviceCreate["request"]>
    client?: ApiV1IptvPlaylistBindDeviceCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvPlaylistBindDeviceCreate["response"], ApiV1IptvPlaylistBindDeviceCreate["error"], ApiV1IptvPlaylistBindDeviceCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvPlaylistBindDeviceCreate["response"], ApiV1IptvPlaylistBindDeviceCreate["error"], ApiV1IptvPlaylistBindDeviceCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvPlaylistBindDeviceCreate["data"], ApiV1IptvPlaylistBindDeviceCreate["error"], ApiV1IptvPlaylistBindDeviceCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/playlist/${id}/bind_device/${devicePk}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
