import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminGroupsUpdateMutationRequest,
  ApiV1ActionsAdminGroupsUpdateMutationResponse,
  ApiV1ActionsAdminGroupsUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsUpdate"

/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export async function apiV1ActionsAdminGroupsUpdate(
  { id }: ApiV1ActionsAdminGroupsUpdatePathParams,
  data: ApiV1ActionsAdminGroupsUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminGroupsUpdateMutationResponse>> {
  const res = await client<ApiV1ActionsAdminGroupsUpdateMutationResponse, ApiV1ActionsAdminGroupsUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/actions/admin/groups/${id}/`,
    data,
    ...options,
  })
  return res
}
