import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1NewsAdminUpdateMutationRequest, ApiV1NewsAdminUpdateMutationResponse, ApiV1NewsAdminUpdatePathParams } from "../../../models/ts/apiController/ApiV1NewsAdminUpdate"

/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export async function apiV1NewsAdminUpdate(
  { id }: ApiV1NewsAdminUpdatePathParams,
  data: ApiV1NewsAdminUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1NewsAdminUpdateMutationResponse>> {
  const res = await client<ApiV1NewsAdminUpdateMutationResponse, ApiV1NewsAdminUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/news/admin/${id}/`,
    data,
    ...options,
  })
  return res
}
