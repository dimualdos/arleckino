import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminImageDeleteMutationResponse, ApiV1FaqAdminImageDeletePathParams, ApiV1FaqAdminImageDelete204 } from "../../../models/ts/apiController/ApiV1FaqAdminImageDelete"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminImageDeleteClient = typeof client<ApiV1FaqAdminImageDeleteMutationResponse, ApiV1FaqAdminImageDelete204, never>
type ApiV1FaqAdminImageDelete = {
  data: ApiV1FaqAdminImageDeleteMutationResponse
  error: ApiV1FaqAdminImageDelete204
  request: never
  pathParams: ApiV1FaqAdminImageDeletePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminImageDeleteClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminImageDeleteClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminImageDeleteClient>>
  }
}
/**
 * @description FormDataimage, faq (ID)Список сообщений **message_type**:* **faq_or_tmp_faq_id_must_be_specified**Значение для faq или tmp_faq_id должно быть указано.* **only_one_values_of_faq_or_tmp_faq_id_must_be_specified**Только одно из значений faq или tmp_faq_id должно быть указано.
 * @summary Создание и удаление фотографий для вопроса
 * @link /api/v1/faq/admin/image/:id/ */
export function useApiV1FaqAdminImageDelete(
  id: ApiV1FaqAdminImageDeletePathParams["id"],
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminImageDelete["response"], ApiV1FaqAdminImageDelete["error"], void>
    client?: ApiV1FaqAdminImageDelete["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminImageDelete["response"], ApiV1FaqAdminImageDelete["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminImageDelete["response"], ApiV1FaqAdminImageDelete["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1FaqAdminImageDelete["data"], ApiV1FaqAdminImageDelete["error"], void>({
        method: "delete",
        url: `/api/v1/faq/admin/image/${id}/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
