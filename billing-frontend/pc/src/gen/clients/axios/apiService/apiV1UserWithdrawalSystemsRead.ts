import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserWithdrawalSystemsReadQueryResponse, ApiV1UserWithdrawalSystemsReadPathParams } from "../../../models/ts/apiController/ApiV1UserWithdrawalSystemsRead"

/**
 * @description .
 * @summary Просмотр системы для вывода средств
 * @link /api/v1/user/withdrawal/systems/:id */
export async function apiV1UserWithdrawalSystemsRead(
  { id }: ApiV1UserWithdrawalSystemsReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserWithdrawalSystemsReadQueryResponse>> {
  const res = await client<ApiV1UserWithdrawalSystemsReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/withdrawal/systems/${id}`,
    ...options,
  })
  return res
}
