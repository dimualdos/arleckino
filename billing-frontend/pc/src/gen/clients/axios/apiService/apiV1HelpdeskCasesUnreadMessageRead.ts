import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesUnreadMessageReadQueryResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesUnreadMessageRead"

/**
 * @description .
 * @summary Количество обращений с непрочитанными сообщениями.
 * @link /api/v1/helpdesk/cases/unread-message/ */
export async function apiV1HelpdeskCasesUnreadMessageRead(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1HelpdeskCasesUnreadMessageReadQueryResponse>> {
  const res = await client<ApiV1HelpdeskCasesUnreadMessageReadQueryResponse>({
    method: "get",
    url: `/api/v1/helpdesk/cases/unread-message/`,
    ...options,
  })
  return res
}
