import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelListDeleteMutationResponse, ApiV1IptvAdminChannelListDelete204 } from "../../../models/ts/apiController/ApiV1IptvAdminChannelListDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelListDeleteClient = typeof client<ApiV1IptvAdminChannelListDeleteMutationResponse, ApiV1IptvAdminChannelListDelete204, never>
type ApiV1IptvAdminChannelListDelete = {
  data: ApiV1IptvAdminChannelListDeleteMutationResponse
  error: ApiV1IptvAdminChannelListDelete204
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelListDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelListDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelListDeleteClient>>
  }
}
/**
 * @description Апи представление для получение каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/list/ */
export function useApiV1IptvAdminChannelListDelete(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelListDelete["response"], ApiV1IptvAdminChannelListDelete["error"], void>
    client?: ApiV1IptvAdminChannelListDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelListDelete["response"], ApiV1IptvAdminChannelListDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelListDelete["response"], ApiV1IptvAdminChannelListDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminChannelListDelete["data"], ApiV1IptvAdminChannelListDelete["error"], void>({
        method: "delete",
        url: `/api/v1/iptv/admin/channel/list/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
