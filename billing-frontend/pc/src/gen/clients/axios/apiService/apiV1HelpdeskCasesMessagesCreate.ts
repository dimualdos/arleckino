import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1HelpdeskCasesMessagesCreateMutationRequest,
  ApiV1HelpdeskCasesMessagesCreateMutationResponse,
  ApiV1HelpdeskCasesMessagesCreatePathParams,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesMessagesCreate"

/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.* **user_is_not_creator_of_case**Пользователь не является владельцем обращения с указанным ID {}.Метод создания нового сообщения принимает данные в формате multipart/form-data.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список сообщений конкретного обращения, создание нового сообщения.
 * @link /api/v1/helpdesk/cases/:case_id/messages/ */
export async function apiV1HelpdeskCasesMessagesCreate(
  { case_id }: ApiV1HelpdeskCasesMessagesCreatePathParams,
  data: ApiV1HelpdeskCasesMessagesCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1HelpdeskCasesMessagesCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesMessagesCreateMutationResponse, ApiV1HelpdeskCasesMessagesCreateMutationRequest>({
    method: "post",
    url: `/api/v1/helpdesk/cases/${case_id}/messages/`,
    data,
    ...options,
  })
  return res
}
