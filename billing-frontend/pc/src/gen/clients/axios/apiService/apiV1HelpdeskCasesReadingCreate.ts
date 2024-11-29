import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesReadingCreateMutationResponse, ApiV1HelpdeskCasesReadingCreatePathParams } from "../../../models/ts/apiController/ApiV1HelpdeskCasesReadingCreate"

/**
 * @description Список сообщений **message_type**:* **helpdesk_case_created_by_another_user**Обращение с указанным ID {} создано другим пользователем.
 * @summary Установка флага прочтения сообщения для указанного обращения.
 * @link /api/v1/helpdesk/cases/:case_id/reading/ */
export async function apiV1HelpdeskCasesReadingCreate(
  { case_id }: ApiV1HelpdeskCasesReadingCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1HelpdeskCasesReadingCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesReadingCreateMutationResponse>({
    method: "post",
    url: `/api/v1/helpdesk/cases/${case_id}/reading/`,
    ...options,
  })
  return res
}
