import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type { ApiV1PermissionsAdminMenuItemsListQueryResponse } from "../../../models/ts/apiController/ApiV1PermissionsAdminMenuItemsList"

/**
 * @description .
 * @summary Список пунктов меню административной панели сайта
 * @link /api/v1/permissions/admin/menu-items/ */
export async function apiV1PermissionsAdminMenuItemsList(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<ApiV1PermissionsAdminMenuItemsListQueryResponse>> {
  const res = await client<ApiV1PermissionsAdminMenuItemsListQueryResponse>({
    method: "get",
    url: `/api/v1/permissions/admin/menu-items/`,
    ...options,
  })
  return res
}
