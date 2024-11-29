import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1NewsAdminImageCreateMutationRequest, ApiV1NewsAdminImageCreateMutationResponse, ApiV1NewsAdminImageCreate201 } from "../../../models/ts/apiController/ApiV1NewsAdminImageCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1NewsAdminImageCreateClient = typeof client<ApiV1NewsAdminImageCreateMutationResponse, ApiV1NewsAdminImageCreate201, ApiV1NewsAdminImageCreateMutationRequest>
type ApiV1NewsAdminImageCreate = {
  data: ApiV1NewsAdminImageCreateMutationResponse
  error: ApiV1NewsAdminImageCreate201
  request: ApiV1NewsAdminImageCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminImageCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminImageCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminImageCreateClient>>
  }
}
/**
 * @description FormDataimage, news (ID)Список сообщений **message_type**:* **news_or_tmp_news_id_must_be_specified**Значение для news или tmp_news_id должно быть указано.* **only_one_values_of_news_or_tmp_news_id_must_be_specified**Только одно из значений news или tmp_news_id должно быть указано.
 * @summary Создание и удаление фотографий для новости
 * @link /api/v1/news/admin/image/ */
export function useApiV1NewsAdminImageCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1NewsAdminImageCreate["response"], ApiV1NewsAdminImageCreate["error"], ApiV1NewsAdminImageCreate["request"]>
    client?: ApiV1NewsAdminImageCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1NewsAdminImageCreate["response"], ApiV1NewsAdminImageCreate["error"], ApiV1NewsAdminImageCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1NewsAdminImageCreate["response"], ApiV1NewsAdminImageCreate["error"], ApiV1NewsAdminImageCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1NewsAdminImageCreate["data"], ApiV1NewsAdminImageCreate["error"], ApiV1NewsAdminImageCreate["request"]>({
        method: "post",
        url: `/api/v1/news/admin/image/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
