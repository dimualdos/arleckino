import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelListCreateMutationRequest,
  ApiV1IptvAdminChannelListCreateMutationResponse,
  ApiV1IptvAdminChannelListCreate201,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelListCreateClient = typeof client<ApiV1IptvAdminChannelListCreateMutationResponse, ApiV1IptvAdminChannelListCreate201, ApiV1IptvAdminChannelListCreateMutationRequest>
type ApiV1IptvAdminChannelListCreate = {
  data: ApiV1IptvAdminChannelListCreateMutationResponse
  error: ApiV1IptvAdminChannelListCreate201
  request: ApiV1IptvAdminChannelListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelListCreateClient>>
  }
}
/**
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export function useApiV1IptvAdminChannelListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelListCreate["response"], ApiV1IptvAdminChannelListCreate["error"], ApiV1IptvAdminChannelListCreate["request"]>
    client?: ApiV1IptvAdminChannelListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelListCreate["response"], ApiV1IptvAdminChannelListCreate["error"], ApiV1IptvAdminChannelListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelListCreate["response"], ApiV1IptvAdminChannelListCreate["error"], ApiV1IptvAdminChannelListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelListCreate["data"], ApiV1IptvAdminChannelListCreate["error"], ApiV1IptvAdminChannelListCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/admin/channel/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
