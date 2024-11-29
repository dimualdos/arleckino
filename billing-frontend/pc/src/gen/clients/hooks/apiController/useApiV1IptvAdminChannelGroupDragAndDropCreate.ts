import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest,
  ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse,
  ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams,
  ApiV1IptvAdminChannelGroupDragAndDropCreate201,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupDragAndDropCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupDragAndDropCreateClient = typeof client<
  ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse,
  ApiV1IptvAdminChannelGroupDragAndDropCreate201,
  ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest
>
type ApiV1IptvAdminChannelGroupDragAndDropCreate = {
  data: ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse
  error: ApiV1IptvAdminChannelGroupDragAndDropCreate201
  request: ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest
  pathParams: ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupDragAndDropCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupDragAndDropCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupDragAndDropCreateClient>>
  }
}
/**
 * @description Изменение позиции группы каналов плейлисте
 * @link /api/v1/iptv/admin/channel-group/:id/drag-and-drop/ */
export function useApiV1IptvAdminChannelGroupDragAndDropCreate(
  id: ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelGroupDragAndDropCreate["response"], ApiV1IptvAdminChannelGroupDragAndDropCreate["error"], ApiV1IptvAdminChannelGroupDragAndDropCreate["request"]>
    client?: ApiV1IptvAdminChannelGroupDragAndDropCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelGroupDragAndDropCreate["response"], ApiV1IptvAdminChannelGroupDragAndDropCreate["error"], ApiV1IptvAdminChannelGroupDragAndDropCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelGroupDragAndDropCreate["response"], ApiV1IptvAdminChannelGroupDragAndDropCreate["error"], ApiV1IptvAdminChannelGroupDragAndDropCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelGroupDragAndDropCreate["data"], ApiV1IptvAdminChannelGroupDragAndDropCreate["error"], ApiV1IptvAdminChannelGroupDragAndDropCreate["request"]>({
        method: "post",
        url: `/api/v1/iptv/admin/channel-group/${id}/drag-and-drop/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
