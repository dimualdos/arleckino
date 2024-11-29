import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelDragAndDropCreateMutationRequest,
  ApiV1IptvAdminChannelDragAndDropCreateMutationResponse,
  ApiV1IptvAdminChannelDragAndDropCreatePathParams,
  ApiV1IptvAdminChannelDragAndDropCreate201,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelDragAndDropCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelDragAndDropCreateClient = typeof client<
  ApiV1IptvAdminChannelDragAndDropCreateMutationResponse,
  ApiV1IptvAdminChannelDragAndDropCreate201,
  ApiV1IptvAdminChannelDragAndDropCreateMutationRequest
>
type ApiV1IptvAdminChannelDragAndDropCreate = {
  data: ApiV1IptvAdminChannelDragAndDropCreateMutationResponse
  error: ApiV1IptvAdminChannelDragAndDropCreate201
  request: ApiV1IptvAdminChannelDragAndDropCreateMutationRequest
  pathParams: ApiV1IptvAdminChannelDragAndDropCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelDragAndDropCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelDragAndDropCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelDragAndDropCreateClient>>
  }
}
/**
 * @description Апи представление для изменения порядкового номера канала по умолчанию
 * @link /api/v1/iptv/admin/channel/:id/drag-and-drop/ */
export function useApiV1IptvAdminChannelDragAndDropCreate(
  id: ApiV1IptvAdminChannelDragAndDropCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelDragAndDropCreate["response"], ApiV1IptvAdminChannelDragAndDropCreate["error"], ApiV1IptvAdminChannelDragAndDropCreate["request"]>
    client?: ApiV1IptvAdminChannelDragAndDropCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelDragAndDropCreate["response"], ApiV1IptvAdminChannelDragAndDropCreate["error"], ApiV1IptvAdminChannelDragAndDropCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelDragAndDropCreate["response"], ApiV1IptvAdminChannelDragAndDropCreate["error"], ApiV1IptvAdminChannelDragAndDropCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelDragAndDropCreate["data"], ApiV1IptvAdminChannelDragAndDropCreate["error"], ApiV1IptvAdminChannelDragAndDropCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/admin/channel/${id}/drag-and-drop/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
