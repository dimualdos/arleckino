import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1UserCountriesListQueryResponse } from "../../../models/ts/apiController/ApiV1UserCountriesList"

/**
 * @link /api/v1/user/countries/ */
export async function apiV1UserCountriesList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1UserCountriesListQueryResponse>> {
  const res = await client<ApiV1UserCountriesListQueryResponse>({
    method: "get",
    url: `/api/v1/user/countries/`,
    ...options,
  })
  return res
}
