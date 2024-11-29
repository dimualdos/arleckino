import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1NewsAdminPartialUpdateMutationRequest,
  ApiV1NewsAdminPartialUpdateMutationResponse,
  ApiV1NewsAdminPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1NewsAdminPartialUpdate"

/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export async function apiV1NewsAdminPartialUpdate(
  { id }: ApiV1NewsAdminPartialUpdatePathParams,
  data: ApiV1NewsAdminPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1NewsAdminPartialUpdateMutationResponse>> {
  const res = await client<ApiV1NewsAdminPartialUpdateMutationResponse, ApiV1NewsAdminPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/news/admin/${id}/`,
    data,
    ...options,
  })
  return res
}
