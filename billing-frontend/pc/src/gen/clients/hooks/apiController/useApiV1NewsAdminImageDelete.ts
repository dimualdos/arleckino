import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1NewsAdminImageDeleteMutationResponse, ApiV1NewsAdminImageDeletePathParams, ApiV1NewsAdminImageDelete204 } from "../../../models/ts/apiController/ApiV1NewsAdminImageDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1NewsAdminImageDeleteClient = typeof client<ApiV1NewsAdminImageDeleteMutationResponse, ApiV1NewsAdminImageDelete204, never>
type ApiV1NewsAdminImageDelete = {
  data: ApiV1NewsAdminImageDeleteMutationResponse
  error: ApiV1NewsAdminImageDelete204
  request: never
  pathParams: ApiV1NewsAdminImageDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminImageDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminImageDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminImageDeleteClient>>
  }
}
/**
 * @description FormDataimage, news (ID)Список сообщений **message_type**:* **news_or_tmp_news_id_must_be_specified**Значение для news или tmp_news_id должно быть указано.* **only_one_values_of_news_or_tmp_news_id_must_be_specified**Только одно из значений news или tmp_news_id должно быть указано.
 * @summary Создание и удаление фотографий для новости
 * @link /api/v1/news/admin/image/:id/ */
export function useApiV1NewsAdminImageDelete(
  id: ApiV1NewsAdminImageDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1NewsAdminImageDelete["response"], ApiV1NewsAdminImageDelete["error"], void>
    client?: ApiV1NewsAdminImageDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1NewsAdminImageDelete["response"], ApiV1NewsAdminImageDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1NewsAdminImageDelete["response"], ApiV1NewsAdminImageDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1NewsAdminImageDelete["data"], ApiV1NewsAdminImageDelete["error"], void>({
        method: "delete",
        url: `/api/v1/news/admin/image/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
