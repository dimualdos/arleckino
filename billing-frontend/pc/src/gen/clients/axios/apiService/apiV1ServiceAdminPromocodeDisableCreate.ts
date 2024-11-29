import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ServiceAdminPromocodeDisableCreateMutationResponse,
  ApiV1ServiceAdminPromocodeDisableCreatePathParams,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeDisableCreate"

/**
 * @description Список сообщений **message_type**:* **promocode_not_found**Промокод с указанным ID {} не обнаружен.* **promocode_is_not_active**Указанный промокод {} не активен.
 * @summary Отключение промокода
 * @link /api/v1/service/admin/promocode/:id/disable */
export async function apiV1ServiceAdminPromocodeDisableCreate(
  { id }: ApiV1ServiceAdminPromocodeDisableCreatePathParams,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ServiceAdminPromocodeDisableCreateMutationResponse>> {
  const res = await client<ApiV1ServiceAdminPromocodeDisableCreateMutationResponse>({
    method: "post",
    url: `/api/v1/service/admin/promocode/${id}/disable`,
    ...options,
  })
  return res
}
