import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelDeleteMutationResponse, ApiV1IptvAdminChannelDeletePathParams, ApiV1IptvAdminChannelDelete204 } from "../../../models/ts/apiController/ApiV1IptvAdminChannelDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelDeleteClient = typeof client<ApiV1IptvAdminChannelDeleteMutationResponse, ApiV1IptvAdminChannelDelete204, never>
type ApiV1IptvAdminChannelDelete = {
  data: ApiV1IptvAdminChannelDeleteMutationResponse
  error: ApiV1IptvAdminChannelDelete204
  request: never
  pathParams: ApiV1IptvAdminChannelDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelDeleteClient>>
  }
}
/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export function useApiV1IptvAdminChannelDelete(
  id: ApiV1IptvAdminChannelDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelDelete["response"], ApiV1IptvAdminChannelDelete["error"], void>
    client?: ApiV1IptvAdminChannelDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelDelete["response"], ApiV1IptvAdminChannelDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelDelete["response"], ApiV1IptvAdminChannelDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminChannelDelete["data"], ApiV1IptvAdminChannelDelete["error"], void>({
        method: "delete",
        url: `/api/v1/iptv/admin/channel/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
