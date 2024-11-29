import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserAdminUserBlockActualReadQueryResponse, ApiV1UserAdminUserBlockActualReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserBlockActualRead"

/**
 * @description * Если результат пустой - пользователь не заблокирован* Результат с описанием блокировки - пользователь заблокирован
 * @summary Получение информации о блокировки пользователя.
 * @link /api/v1/user/admin/user/:id/block/actual */
export async function apiV1UserAdminUserBlockActualRead(
  { id }: ApiV1UserAdminUserBlockActualReadPathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserBlockActualReadQueryResponse>> {
  const res = await client<ApiV1UserAdminUserBlockActualReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/admin/user/${id}/block/actual`,
    ...options,
  })
  return res
}
