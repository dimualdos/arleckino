import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1IptvAdminImportChannelValidateCreateMutationResponse,
  ApiV1IptvAdminImportChannelValidateCreate201,
} from "../../../models/ts/apiController/ApiV1IptvAdminImportChannelValidateCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1IptvAdminImportChannelValidateCreateClient = typeof client<ApiV1IptvAdminImportChannelValidateCreateMutationResponse, ApiV1IptvAdminImportChannelValidateCreate201, never>
type ApiV1IptvAdminImportChannelValidateCreate = {
  data: ApiV1IptvAdminImportChannelValidateCreateMutationResponse
  error: ApiV1IptvAdminImportChannelValidateCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminImportChannelValidateCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminImportChannelValidateCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminImportChannelValidateCreateClient>>
  }
}
/**
 * @description .
 * @summary Проверка данных о группах каналов и каналах из CSV файла
 * @link /api/v1/iptv/admin/import-channel/validate/ */
export function useApiV1IptvAdminImportChannelValidateCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1IptvAdminImportChannelValidateCreate["response"], ApiV1IptvAdminImportChannelValidateCreate["error"], void>
    client?: ApiV1IptvAdminImportChannelValidateCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1IptvAdminImportChannelValidateCreate["response"], ApiV1IptvAdminImportChannelValidateCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1IptvAdminImportChannelValidateCreate["response"], ApiV1IptvAdminImportChannelValidateCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1IptvAdminImportChannelValidateCreate["data"], ApiV1IptvAdminImportChannelValidateCreate["error"], void>({
        method: "post",
        url: `/api/v1/iptv/admin/import-channel/validate/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
