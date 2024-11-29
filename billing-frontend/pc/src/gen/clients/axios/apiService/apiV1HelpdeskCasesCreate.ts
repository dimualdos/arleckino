import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesCreateMutationRequest, ApiV1HelpdeskCasesCreateMutationResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesCreate"

/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.* **user_not_found_by_id**Пользователь с указанным ID {} не обнаружен.Метод создания нового обращения принимает данные в формате **multipart/form-data**.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Список обращений, создание нового обращения.
 * @link /api/v1/helpdesk/cases/ */
export async function apiV1HelpdeskCasesCreate(
  data: ApiV1HelpdeskCasesCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1HelpdeskCasesCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesCreateMutationResponse, ApiV1HelpdeskCasesCreateMutationRequest>({
    method: "post",
    url: `/api/v1/helpdesk/cases/`,
    data,
    ...options,
  })
  return res
}
