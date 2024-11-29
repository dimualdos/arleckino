import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest,
  ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse,
  ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1DbTemplatesAdminTemplatesPartialUpdate"

/**
 * @description .
 * @summary Просмотр, изменение шаблона
 * @link /api/v1/db_templates/admin/templates/:id/ */
export async function apiV1DbTemplatesAdminTemplatesPartialUpdate(
  { id }: ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams,
  data?: ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse>> {
  const res = await client<ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse, ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/db_templates/admin/templates/${id}/`,
    data,
    ...options,
  })
  return res
}
