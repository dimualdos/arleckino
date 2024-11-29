import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1ActionsAdminGroupsCreateMutationRequest, ApiV1ActionsAdminGroupsCreateMutationResponse } from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsCreate"

/**
 * @description Представление для выборки всех групп логов
 * @link /api/v1/actions/admin/groups */
export async function apiV1ActionsAdminGroupsCreate(
  data: ApiV1ActionsAdminGroupsCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminGroupsCreateMutationResponse>> {
  const res = await client<ApiV1ActionsAdminGroupsCreateMutationResponse, ApiV1ActionsAdminGroupsCreateMutationRequest>({
    method: "post",
    url: `/api/v1/actions/admin/groups`,
    data,
    ...options,
  })
  return res
}
