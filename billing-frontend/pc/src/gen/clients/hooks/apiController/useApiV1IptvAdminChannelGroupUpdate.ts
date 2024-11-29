import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelGroupUpdateMutationRequest,
  ApiV1IptvAdminChannelGroupUpdateMutationResponse,
  ApiV1IptvAdminChannelGroupUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupUpdateClient = typeof client<ApiV1IptvAdminChannelGroupUpdateMutationResponse, never, ApiV1IptvAdminChannelGroupUpdateMutationRequest>
type ApiV1IptvAdminChannelGroupUpdate = {
  data: ApiV1IptvAdminChannelGroupUpdateMutationResponse
  error: never
  request: ApiV1IptvAdminChannelGroupUpdateMutationRequest
  pathParams: ApiV1IptvAdminChannelGroupUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export function useApiV1IptvAdminChannelGroupUpdate(
  id: ApiV1IptvAdminChannelGroupUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelGroupUpdate["response"], ApiV1IptvAdminChannelGroupUpdate["error"], ApiV1IptvAdminChannelGroupUpdate["request"]>
    client?: ApiV1IptvAdminChannelGroupUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelGroupUpdate["response"], ApiV1IptvAdminChannelGroupUpdate["error"], ApiV1IptvAdminChannelGroupUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelGroupUpdate["response"], ApiV1IptvAdminChannelGroupUpdate["error"], ApiV1IptvAdminChannelGroupUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelGroupUpdate["data"], ApiV1IptvAdminChannelGroupUpdate["error"], ApiV1IptvAdminChannelGroupUpdate["request"]>({
        method: "put",
        url: `/api/v1/iptv/admin/channel-group/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
