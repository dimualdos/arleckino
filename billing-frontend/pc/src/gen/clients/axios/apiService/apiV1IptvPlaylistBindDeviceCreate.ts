import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1IptvPlaylistBindDeviceCreateMutationRequest,
  ApiV1IptvPlaylistBindDeviceCreateMutationResponse,
  ApiV1IptvPlaylistBindDeviceCreatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvPlaylistBindDeviceCreate"

/**
 * @description Связывание плейлиста (pk) и устройства (device_pk)
 * @link /api/v1/iptv/playlist/:id/bind_device/:device_pk/ */
export async function apiV1IptvPlaylistBindDeviceCreate(
  { device_pk, id }: ApiV1IptvPlaylistBindDeviceCreatePathParams,
  data?: ApiV1IptvPlaylistBindDeviceCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1IptvPlaylistBindDeviceCreateMutationResponse>> {
  const res = await client<ApiV1IptvPlaylistBindDeviceCreateMutationResponse, ApiV1IptvPlaylistBindDeviceCreateMutationRequest>({
    method: "post",
    url: `/api/v1/iptv/playlist/${id}/bind_device/${device_pk}/`,
    data,
    ...options,
  })
  return res
}
