import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminGroupsPartialUpdateMutationRequest,
  ApiV1ActionsAdminGroupsPartialUpdateMutationResponse,
  ApiV1ActionsAdminGroupsPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsPartialUpdate"

/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export async function apiV1ActionsAdminGroupsPartialUpdate(
  { id }: ApiV1ActionsAdminGroupsPartialUpdatePathParams,
  data: ApiV1ActionsAdminGroupsPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminGroupsPartialUpdateMutationResponse>> {
  const res = await client<ApiV1ActionsAdminGroupsPartialUpdateMutationResponse, ApiV1ActionsAdminGroupsPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/actions/admin/groups/${id}/`,
    data,
    ...options,
  })
  return res
}
