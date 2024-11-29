import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1FaqAdminPartialUpdateMutationRequest,
  ApiV1FaqAdminPartialUpdateMutationResponse,
  ApiV1FaqAdminPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1FaqAdminPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export async function apiV1FaqAdminPartialUpdate(
  { id }: ApiV1FaqAdminPartialUpdatePathParams,
  data: ApiV1FaqAdminPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1FaqAdminPartialUpdateMutationResponse>> {
  const res = await client<ApiV1FaqAdminPartialUpdateMutationResponse, ApiV1FaqAdminPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/faq/admin/${id}/`,
    data,
    ...options,
  })
  return res
}
