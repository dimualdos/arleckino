import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserPartialUpdateMutationRequest,
  ApiV1UserAdminUserPartialUpdateMutationResponse,
  ApiV1UserAdminUserPartialUpdatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserPartialUpdate"

/**
 * @description .
 * @summary Просмотр и изменение информации о пользователе администратором
 * @link /api/v1/user/admin/user/:id */
export async function apiV1UserAdminUserPartialUpdate(
  { id }: ApiV1UserAdminUserPartialUpdatePathParams,
  data: ApiV1UserAdminUserPartialUpdateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserPartialUpdateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserPartialUpdateMutationResponse, ApiV1UserAdminUserPartialUpdateMutationRequest>({
    method: "patch",
    url: `/api/v1/user/admin/user/${id}`,
    data,
    ...options,
  })
  return res
}
