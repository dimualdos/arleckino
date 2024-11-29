import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1FaqAdminImageCreateMutationRequest, ApiV1FaqAdminImageCreateMutationResponse, ApiV1FaqAdminImageCreate201 } from "../../../models/ts/apiController/ApiV1FaqAdminImageCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1FaqAdminImageCreateClient = typeof client<ApiV1FaqAdminImageCreateMutationResponse, ApiV1FaqAdminImageCreate201, ApiV1FaqAdminImageCreateMutationRequest>
type ApiV1FaqAdminImageCreate = {
  data: ApiV1FaqAdminImageCreateMutationResponse
  error: ApiV1FaqAdminImageCreate201
  request: ApiV1FaqAdminImageCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminImageCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminImageCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminImageCreateClient>>
  }
}
/**
 * @description FormDataimage, faq (ID)Список сообщений **message_type**:* **faq_or_tmp_faq_id_must_be_specified**Значение для faq или tmp_faq_id должно быть указано.* **only_one_values_of_faq_or_tmp_faq_id_must_be_specified**Только одно из значений faq или tmp_faq_id должно быть указано.
 * @summary Создание и удаление фотографий для вопроса
 * @link /api/v1/faq/admin/image/ */
export function useApiV1FaqAdminImageCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1FaqAdminImageCreate["response"], ApiV1FaqAdminImageCreate["error"], ApiV1FaqAdminImageCreate["request"]>
    client?: ApiV1FaqAdminImageCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1FaqAdminImageCreate["response"], ApiV1FaqAdminImageCreate["error"], ApiV1FaqAdminImageCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1FaqAdminImageCreate["response"], ApiV1FaqAdminImageCreate["error"], ApiV1FaqAdminImageCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1FaqAdminImageCreate["data"], ApiV1FaqAdminImageCreate["error"], ApiV1FaqAdminImageCreate["request"]>({
        method: "post",
        url: `/api/v1/faq/admin/image/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
