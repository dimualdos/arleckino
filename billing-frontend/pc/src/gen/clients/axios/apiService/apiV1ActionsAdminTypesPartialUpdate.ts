import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminTypesPartialUpdateMutationRequest,
  ApiV1ActionsAdminTypesPartialUpdateMutationResponse,
  ApiV1ActionsAdminTypesPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminTypesPartialUpdate"

/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export async function apiV1ActionsAdminTypesPartialUpdate(
  { id }: ApiV1ActionsAdminTypesPartialUpdatePathParams,
  data: ApiV1ActionsAdminTypesPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminTypesPartialUpdateMutationResponse>> {
  const res = await client<ApiV1ActionsAdminTypesPartialUpdateMutationResponse, ApiV1ActionsAdminTypesPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/actions/admin/types/${id}/`,
    data,
    ...options,
  })
  return res
}
