import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserTimezoneListQueryResponse } from "../../../models/ts/apiController/ApiV1UserTimezoneList"

/**
 * @description .
 * @summary Получение списка временных зон.
 * @link /api/v1/user/timezone/ */
export async function apiV1UserTimezoneList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserTimezoneListQueryResponse>> {
  const res = await client<ApiV1UserTimezoneListQueryResponse>({
    method: "get",
    url: `/api/v1/user/timezone/`,
    ...options,
  })
  return res
}
