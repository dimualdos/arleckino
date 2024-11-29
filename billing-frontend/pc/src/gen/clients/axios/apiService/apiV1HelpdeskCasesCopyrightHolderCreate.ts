import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest,
  ApiV1HelpdeskCasesCopyrightHolderCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesCopyrightHolderCreate"

/**
 * @description Список сообщений **message_type**:* **omnidesk_api_not_connect**Omnidesk API: ошибка подключения к серверу.* **omnidesk_api_bad_request**Omnidesk API: ошибка обработки запроса.Операции выполняются в фоновой задаче, возвращается объект: **{'task_id': {task.id}, 'status': 'processed'}**.Необходимо периодически повторять запрос с GET-параметром **task_id={task.id}**пока в результате параметр **status=processed**.
 * @summary Создание нового обращения правообладателем.
 * @link /api/v1/helpdesk/cases/copyright-holder/ */
export async function apiV1HelpdeskCasesCopyrightHolderCreate(
  data: ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1HelpdeskCasesCopyrightHolderCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesCopyrightHolderCreateMutationResponse, ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest>({
    method: "post",
    url: `/api/v1/helpdesk/cases/copyright-holder/`,
    data,
    ...options,
  })
  return res
}
