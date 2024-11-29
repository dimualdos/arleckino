import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceAdminPromocodeDeleteMutationResponse, ApiV1ServiceAdminPromocodeDeletePathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeDelete"

/**
 * @description Список сообщений **message_type**:* **promocode_delete_is_impossible**Обнаружено {} транзакций применения данного промокода, удаление невозможно.
 * @summary Удаление промокода.
 * @link /api/v1/service/admin/promocode/:id/ */
export async function apiV1ServiceAdminPromocodeDelete(
  { id }: ApiV1ServiceAdminPromocodeDeletePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeDeleteMutationResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeDeleteMutationResponse>({
    method: "delete",
    url: `/api/v1/service/admin/promocode/${id}/`,
    ...options,
  })
  return res
}
