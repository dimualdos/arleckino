import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelGroupListCreateMutationRequest,
  ApiV1IptvAdminChannelGroupListCreateMutationResponse,
  ApiV1IptvAdminChannelGroupListCreate201,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupListCreateClient = typeof client<
  ApiV1IptvAdminChannelGroupListCreateMutationResponse,
  ApiV1IptvAdminChannelGroupListCreate201,
  ApiV1IptvAdminChannelGroupListCreateMutationRequest
>
type ApiV1IptvAdminChannelGroupListCreate = {
  data: ApiV1IptvAdminChannelGroupListCreateMutationResponse
  error: ApiV1IptvAdminChannelGroupListCreate201
  request: ApiV1IptvAdminChannelGroupListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupListCreateClient>>
  }
}
/**
 * @description Список групп каналов, создание новой группы каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export function useApiV1IptvAdminChannelGroupListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelGroupListCreate["response"], ApiV1IptvAdminChannelGroupListCreate["error"], ApiV1IptvAdminChannelGroupListCreate["request"]>
    client?: ApiV1IptvAdminChannelGroupListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelGroupListCreate["response"], ApiV1IptvAdminChannelGroupListCreate["error"], ApiV1IptvAdminChannelGroupListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelGroupListCreate["response"], ApiV1IptvAdminChannelGroupListCreate["error"], ApiV1IptvAdminChannelGroupListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelGroupListCreate["data"], ApiV1IptvAdminChannelGroupListCreate["error"], ApiV1IptvAdminChannelGroupListCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/admin/channel-group/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
