import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelUpdateMutationRequest,
  ApiV1IptvAdminChannelUpdateMutationResponse,
  ApiV1IptvAdminChannelUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelUpdateClient = typeof client<ApiV1IptvAdminChannelUpdateMutationResponse, never, ApiV1IptvAdminChannelUpdateMutationRequest>
type ApiV1IptvAdminChannelUpdate = {
  data: ApiV1IptvAdminChannelUpdateMutationResponse
  error: never
  request: ApiV1IptvAdminChannelUpdateMutationRequest
  pathParams: ApiV1IptvAdminChannelUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelUpdateClient>>
  }
}
/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export function useApiV1IptvAdminChannelUpdate(
  id: ApiV1IptvAdminChannelUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelUpdate["response"], ApiV1IptvAdminChannelUpdate["error"], ApiV1IptvAdminChannelUpdate["request"]>
    client?: ApiV1IptvAdminChannelUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelUpdate["response"], ApiV1IptvAdminChannelUpdate["error"], ApiV1IptvAdminChannelUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelUpdate["response"], ApiV1IptvAdminChannelUpdate["error"], ApiV1IptvAdminChannelUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelUpdate["data"], ApiV1IptvAdminChannelUpdate["error"], ApiV1IptvAdminChannelUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/admin/channel/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
