import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesListQueryResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesList"

/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.Метод создания нового обращения принимает данные в формате **multipart/form-data**.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список обращений, создание нового обращения.
 * @link /api/v1/helpdesk/cases/ */
export async function apiV1HelpdeskCasesList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1HelpdeskCasesListQueryResponse>> {
  const res = await client<ApiV1HelpdeskCasesListQueryResponse>({
    method: "get",
    url: `/api/v1/helpdesk/cases/`,
    ...options,
  })
  return res
}
