import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1ActionsAdminTypesUpdateMutationRequest,
  ApiV1ActionsAdminTypesUpdateMutationResponse,
  ApiV1ActionsAdminTypesUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminTypesUpdate"

/**
 * @description Представление для выборки данных конкретного действия
 * @link /api/v1/actions/admin/types/:id/ */
export async function apiV1ActionsAdminTypesUpdate(
  { id }: ApiV1ActionsAdminTypesUpdatePathParams,
  data: ApiV1ActionsAdminTypesUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1ActionsAdminTypesUpdateMutationResponse>> {
  const res = await client<ApiV1ActionsAdminTypesUpdateMutationResponse, ApiV1ActionsAdminTypesUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/actions/admin/types/${id}/`,
    data,
    ...options,
  })
  return res
}
