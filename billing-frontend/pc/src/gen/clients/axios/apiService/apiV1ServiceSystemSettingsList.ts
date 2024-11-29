import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ServiceSystemSettingsListQueryResponse } from "../../../models/ts/apiController/ApiV1ServiceSystemSettingsList"

/**
 * @link /api/v1/service/system-settings/ */
export async function apiV1ServiceSystemSettingsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1ServiceSystemSettingsListQueryResponse>> {
  const res = await client<ApiV1ServiceSystemSettingsListQueryResponse>({
    method: "get",
    url: `/api/v1/service/system-settings/`,
    ...options,
  })
  return res
}
