import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesFaqCreateMutationRequest, ApiV1HelpdeskCasesFaqCreateMutationResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesFaqCreate"

/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Создание нового обращения на основании вопроса.
 * @link /api/v1/helpdesk/cases/faq/ */
export async function apiV1HelpdeskCasesFaqCreate(
  data: ApiV1HelpdeskCasesFaqCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1HelpdeskCasesFaqCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesFaqCreateMutationResponse, ApiV1HelpdeskCasesFaqCreateMutationRequest>({
    method: "post",
    url: `/api/v1/helpdesk/cases/faq/`,
    data,
    ...options,
  })
  return res
}
