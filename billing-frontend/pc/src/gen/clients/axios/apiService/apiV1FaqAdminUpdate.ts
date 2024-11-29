import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1FaqAdminUpdateMutationRequest, ApiV1FaqAdminUpdateMutationResponse, ApiV1FaqAdminUpdatePathParams } from "../../../models/ts/apiController/ApiV1FaqAdminUpdate"

/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export async function apiV1FaqAdminUpdate(
  { id }: ApiV1FaqAdminUpdatePathParams,
  data: ApiV1FaqAdminUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminUpdateMutationResponse>> {
  const res = await client<ApiV1FaqAdminUpdateMutationResponse, ApiV1FaqAdminUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/faq/admin/${id}/`,
    data,
    ...options,
  })
  return res
}
