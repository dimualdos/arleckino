import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1HelpdeskCasesReadingCreateMutationResponse,
  ApiV1HelpdeskCasesReadingCreatePathParams,
  ApiV1HelpdeskCasesReadingCreate201,
} from "../../../models/ts/apiController/ApiV1HelpdeskCasesReadingCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesReadingCreateClient = typeof client<ApiV1HelpdeskCasesReadingCreateMutationResponse, ApiV1HelpdeskCasesReadingCreate201, never>
type ApiV1HelpdeskCasesReadingCreate = {
  data: ApiV1HelpdeskCasesReadingCreateMutationResponse
  error: ApiV1HelpdeskCasesReadingCreate201
  request: never
  pathParams: ApiV1HelpdeskCasesReadingCreatePathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesReadingCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesReadingCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesReadingCreateClient>>
  }
}
/**
 * @description Список сообщений **message_type**:* **helpdesk_case_created_by_another_user**Обращение с указанным ID {} создано другим пользователем.
 * @summary Установка флага прочтения сообщения для указанного обращения.
 * @link /api/v1/helpdesk/cases/:case_id/reading/ */
export function useApiV1HelpdeskCasesReadingCreate(
  caseId: ApiV1HelpdeskCasesReadingCreatePathParams["case_id"],
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesReadingCreate["response"], ApiV1HelpdeskCasesReadingCreate["error"], void>
    client?: ApiV1HelpdeskCasesReadingCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesReadingCreate["response"], ApiV1HelpdeskCasesReadingCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesReadingCreate["response"], ApiV1HelpdeskCasesReadingCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1HelpdeskCasesReadingCreate["data"], ApiV1HelpdeskCasesReadingCreate["error"], void>({
        method: "post",
        url: `/api/v1/helpdesk/cases/${caseId}/reading/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
