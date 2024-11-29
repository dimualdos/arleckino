import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type { ApiV1HelpdeskCasesOmnideskWebhookCreateMutationResponse, ApiV1HelpdeskCasesOmnideskWebhookCreate201 } from "../../../models/ts/apiController/ApiV1HelpdeskCasesOmnideskWebhookCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1HelpdeskCasesOmnideskWebhookCreateClient = typeof client<ApiV1HelpdeskCasesOmnideskWebhookCreateMutationResponse, ApiV1HelpdeskCasesOmnideskWebhookCreate201, never>
type ApiV1HelpdeskCasesOmnideskWebhookCreate = {
  data: ApiV1HelpdeskCasesOmnideskWebhookCreateMutationResponse
  error: ApiV1HelpdeskCasesOmnideskWebhookCreate201
  request: never
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1HelpdeskCasesOmnideskWebhookCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1HelpdeskCasesOmnideskWebhookCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1HelpdeskCasesOmnideskWebhookCreateClient>>
  }
}
/**
 * @description .
 * @summary Обработка события, полученного от Omnidesk.
 * @link /api/v1/helpdesk/cases/omnidesk-webhook/ */
export function useApiV1HelpdeskCasesOmnideskWebhookCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1HelpdeskCasesOmnideskWebhookCreate["response"], ApiV1HelpdeskCasesOmnideskWebhookCreate["error"], void>
    client?: ApiV1HelpdeskCasesOmnideskWebhookCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1HelpdeskCasesOmnideskWebhookCreate["response"], ApiV1HelpdeskCasesOmnideskWebhookCreate["error"], void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1HelpdeskCasesOmnideskWebhookCreate["response"], ApiV1HelpdeskCasesOmnideskWebhookCreate["error"], void>({
    mutationFn: async () => {
      const res = await client<ApiV1HelpdeskCasesOmnideskWebhookCreate["data"], ApiV1HelpdeskCasesOmnideskWebhookCreate["error"], void>({
        method: "post",
        url: `/api/v1/helpdesk/cases/omnidesk-webhook/`,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
