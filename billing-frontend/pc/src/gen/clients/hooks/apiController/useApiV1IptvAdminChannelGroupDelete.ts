import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminChannelGroupDeleteMutationResponse,
  ApiV1IptvAdminChannelGroupDeletePathParams,
  ApiV1IptvAdminChannelGroupDelete204,
} from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupDeleteClient = typeof client<ApiV1IptvAdminChannelGroupDeleteMutationResponse, ApiV1IptvAdminChannelGroupDelete204, never>
type ApiV1IptvAdminChannelGroupDelete = {
  data: ApiV1IptvAdminChannelGroupDeleteMutationResponse
  error: ApiV1IptvAdminChannelGroupDelete204
  request: never
  pathParams: ApiV1IptvAdminChannelGroupDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupDeleteClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export function useApiV1IptvAdminChannelGroupDelete(
  id: ApiV1IptvAdminChannelGroupDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminChannelGroupDelete["response"], ApiV1IptvAdminChannelGroupDelete["error"], void>
    client?: ApiV1IptvAdminChannelGroupDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminChannelGroupDelete["response"], ApiV1IptvAdminChannelGroupDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminChannelGroupDelete["response"], ApiV1IptvAdminChannelGroupDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminChannelGroupDelete["data"], ApiV1IptvAdminChannelGroupDelete["error"], void>({
        method: "delete",
        url: `/api/v1/iptv/admin/channel-group/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
