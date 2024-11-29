import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1IptvAdminImportChannelImportCreateMutationResponse, ApiV1IptvAdminImportChannelImportCreate201 } from "../../../models/ts/apiController/ApiV1IptvAdminImportChannelImportCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminImportChannelImportCreateClient = typeof client<ApiV1IptvAdminImportChannelImportCreateMutationResponse, ApiV1IptvAdminImportChannelImportCreate201, never>
type ApiV1IptvAdminImportChannelImportCreate = {
  data: ApiV1IptvAdminImportChannelImportCreateMutationResponse
  error: ApiV1IptvAdminImportChannelImportCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminImportChannelImportCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminImportChannelImportCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminImportChannelImportCreateClient>>
  }
}
/**
 * @description .
 * @summary Импорт данных о группах каналов и каналах из CSV файла
 * @link /api/v1/iptv/admin/import-channel/import/ */
export function useApiV1IptvAdminImportChannelImportCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminImportChannelImportCreate["response"], ApiV1IptvAdminImportChannelImportCreate["error"], void>
    client?: ApiV1IptvAdminImportChannelImportCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminImportChannelImportCreate["response"], ApiV1IptvAdminImportChannelImportCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminImportChannelImportCreate["response"], ApiV1IptvAdminImportChannelImportCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminImportChannelImportCreate["data"], ApiV1IptvAdminImportChannelImportCreate["error"], void>({
        method: "post",
        url: `/api/v1/iptv/admin/import-channel/import/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
