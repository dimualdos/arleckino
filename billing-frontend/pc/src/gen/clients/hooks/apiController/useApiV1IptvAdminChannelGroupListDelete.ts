import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelGroupListDeleteMutationResponse, ApiV1IptvAdminChannelGroupListDelete204 } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupListDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupListDeleteClient = typeof client<ApiV1IptvAdminChannelGroupListDeleteMutationResponse, ApiV1IptvAdminChannelGroupListDelete204, never>
type ApiV1IptvAdminChannelGroupListDelete = {
  data: ApiV1IptvAdminChannelGroupListDeleteMutationResponse
  error: ApiV1IptvAdminChannelGroupListDelete204
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupListDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupListDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupListDeleteClient>>
  }
}
/**
 * @description Удаление всех групп каналов
 * @link /api/v1/iptv/admin/channel-group/list/ */
export function useApiV1IptvAdminChannelGroupListDelete(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelGroupListDelete["response"], ApiV1IptvAdminChannelGroupListDelete["error"], void>
    client?: ApiV1IptvAdminChannelGroupListDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelGroupListDelete["response"], ApiV1IptvAdminChannelGroupListDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelGroupListDelete["response"], ApiV1IptvAdminChannelGroupListDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminChannelGroupListDelete["data"], ApiV1IptvAdminChannelGroupListDelete["error"], void>({
        method: "delete",
        url: `/api/v1/iptv/admin/channel-group/list/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
