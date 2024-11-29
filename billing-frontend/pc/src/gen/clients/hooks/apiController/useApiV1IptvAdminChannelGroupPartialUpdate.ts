import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest,
  ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse,
  ApiV1IptvAdminChannelGroupPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupPartialUpdate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupPartialUpdateClient = typeof client<ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse, never, ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest>
type ApiV1IptvAdminChannelGroupPartialUpdate = {
  data: ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse
  error: never
  request: ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest
  pathParams: ApiV1IptvAdminChannelGroupPartialUpdatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupPartialUpdateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupPartialUpdateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupPartialUpdateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export function useApiV1IptvAdminChannelGroupPartialUpdate(
  id: ApiV1IptvAdminChannelGroupPartialUpdatePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelGroupPartialUpdate["response"], ApiV1IptvAdminChannelGroupPartialUpdate["error"], ApiV1IptvAdminChannelGroupPartialUpdate["request"]>
    client?: ApiV1IptvAdminChannelGroupPartialUpdate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelGroupPartialUpdate["response"], ApiV1IptvAdminChannelGroupPartialUpdate["error"], ApiV1IptvAdminChannelGroupPartialUpdate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelGroupPartialUpdate["response"], ApiV1IptvAdminChannelGroupPartialUpdate["error"], ApiV1IptvAdminChannelGroupPartialUpdate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1IptvAdminChannelGroupPartialUpdate["data"], ApiV1IptvAdminChannelGroupPartialUpdate["error"], ApiV1IptvAdminChannelGroupPartialUpdate["request"]>({
        method: "patch",
        url: `/api/v1/iptv/admin/channel-group/${id}/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
