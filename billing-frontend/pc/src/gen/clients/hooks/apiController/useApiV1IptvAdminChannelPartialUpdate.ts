import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelPartialUpdateMutationRequest,
  ApiV1IptvAdminChannelPartialUpdateMutationResponse,
  ApiV1IptvAdminChannelPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelPartialUpdateClient = typeof client<ApiV1IptvAdminChannelPartialUpdateMutationResponse, never, ApiV1IptvAdminChannelPartialUpdateMutationRequest>
type ApiV1IptvAdminChannelPartialUpdate = {
  data: ApiV1IptvAdminChannelPartialUpdateMutationResponse
  error: never
  request: ApiV1IptvAdminChannelPartialUpdateMutationRequest
  pathParams: ApiV1IptvAdminChannelPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelPartialUpdateClient>>
  }
}
/**
 * @description Апи представление для RUD каналов по умолчанию из админки
 * @link /api/v1/iptv/admin/channel/:id/ */
export function useApiV1IptvAdminChannelPartialUpdate(
  id: ApiV1IptvAdminChannelPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelPartialUpdate["response"], ApiV1IptvAdminChannelPartialUpdate["error"], ApiV1IptvAdminChannelPartialUpdate["request"]>
    client?: ApiV1IptvAdminChannelPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelPartialUpdate["response"], ApiV1IptvAdminChannelPartialUpdate["error"], ApiV1IptvAdminChannelPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelPartialUpdate["response"], ApiV1IptvAdminChannelPartialUpdate["error"], ApiV1IptvAdminChannelPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelPartialUpdate["data"], ApiV1IptvAdminChannelPartialUpdate["error"], ApiV1IptvAdminChannelPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/iptv/admin/channel/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
