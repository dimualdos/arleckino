import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesCloseCreateMutationResponse, ApiV1HelpdeskCasesCloseCreatePathParams } from "../../../models/ts/apiController/ApiV1HelpdeskCasesCloseCreate"

/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **user_is_not_creator_of_case**Пользователь не является владельцем обращения с указанным ID {}.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Закрытие обращения.
 * @link /api/v1/helpdesk/cases/:case_id/close/ */
export async function apiV1HelpdeskCasesCloseCreate(
  { case_id }: ApiV1HelpdeskCasesCloseCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1HelpdeskCasesCloseCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesCloseCreateMutationResponse>({
    method: "post",
    url: `/api/v1/helpdesk/cases/${case_id}/close/`,
    ...options,
  })
  return res
}
