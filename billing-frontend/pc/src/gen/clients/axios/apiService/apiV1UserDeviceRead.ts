import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserDeviceReadQueryResponse, ApiV1UserDeviceReadPathParams } from "../../../models/ts/apiController/ApiV1UserDeviceRead"

/**
 * @description Список сообщений **message_type**:* **device_name_already_exists**Устройство с указанным именем уже существует, укажите другое имя.* **device_cannot_deleted_while_active_subscription**Устройство может быть удалено после окончания срока действия подписки {date_end}.* **hwid_cannot_be_changed_by_the_user**HWID не может быть изменен пользователем.* **hwid_must_be_deleted_together_with_the_pairing_code**HWID должно быть удалено вместе с кодом сопряжения.* **device_pairing_code_already_exists**Указанный код сопряжения уже используется для другого устройства, укажите другой код сопряжения.
 * @summary Просмотр, изменение и удаление устройства пользователя
 * @link /api/v1/user/device/:id/ */
export async function apiV1UserDeviceRead({ id }: ApiV1UserDeviceReadPathParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserDeviceReadQueryResponse>> {
  const res = await client<ApiV1UserDeviceReadQueryResponse>({
    method: "get",
    url: `/api/v1/user/device/${id}/`,
    ...options,
  })
  return res
}
