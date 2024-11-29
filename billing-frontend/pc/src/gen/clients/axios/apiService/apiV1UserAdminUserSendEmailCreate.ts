import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserAdminUserSendEmailCreateMutationRequest,
  ApiV1UserAdminUserSendEmailCreateMutationResponse,
  ApiV1UserAdminUserSendEmailCreatePathParams,
} from "../../../models/ts/apiController/ApiV1UserAdminUserSendEmailCreate"

/**
 * @description .
 * @summary Отправить сообщение на e-mail пользователя
 * @link /api/v1/user/admin/user/:id/send-email */
export async function apiV1UserAdminUserSendEmailCreate(
  { id }: ApiV1UserAdminUserSendEmailCreatePathParams,
  data: ApiV1UserAdminUserSendEmailCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserAdminUserSendEmailCreateMutationResponse>> {
  const res = await client<ApiV1UserAdminUserSendEmailCreateMutationResponse, ApiV1UserAdminUserSendEmailCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/admin/user/${id}/send-email`,
    data,
    ...options,
  })
  return res
}
