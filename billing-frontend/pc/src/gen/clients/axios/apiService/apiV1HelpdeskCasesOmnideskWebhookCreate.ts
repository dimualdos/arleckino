import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1HelpdeskCasesOmnideskWebhookCreateMutationResponse } from "../../../models/ts/apiController/ApiV1HelpdeskCasesOmnideskWebhookCreate"

/**
 * @description .
 * @summary Обработка события, полученного от Omnidesk.
 * @link /api/v1/helpdesk/cases/omnidesk-webhook/ */
export async function apiV1HelpdeskCasesOmnideskWebhookCreate(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1HelpdeskCasesOmnideskWebhookCreateMutationResponse>> {
  const res = await client<ApiV1HelpdeskCasesOmnideskWebhookCreateMutationResponse>({
    method: "post",
    url: `/api/v1/helpdesk/cases/omnidesk-webhook/`,
    ...options,
  })
  return res
}
