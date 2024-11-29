import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminWithdrawalSystemsCreateMutationRequest,
  ApiV1UserAdminWithdrawalSystemsCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1UserAdminWithdrawalSystemsCreate"

/**
 * @description .
 * @summary Список систем для вывода средств, создание новой системы для вывода средств
 * @link /api/v1/user/admin/withdrawal/systems */
export async function apiV1UserAdminWithdrawalSystemsCreate(
  data: ApiV1UserAdminWithdrawalSystemsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminWithdrawalSystemsCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminWithdrawalSystemsCreateMutationResponse, ApiV1UserAdminWithdrawalSystemsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/withdrawal/systems`,
    data,
    ...options,
  })
  return res
}
