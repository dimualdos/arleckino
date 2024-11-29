import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesUpdate"

/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export async function apiV1DbTemplatesAdminTemplatesUpdate(
  { id }: ApiV1DbTemplatesAdminTemplatesUpdatePathParams,
  data?: ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse, ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest>({
    method: "put",
    url: `/api/v1/db_templates/admin/templates/${id}/`,
    data,
    ...options,
  })
  return res
}
