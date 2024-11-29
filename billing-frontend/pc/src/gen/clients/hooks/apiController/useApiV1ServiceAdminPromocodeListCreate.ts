import client from "@/src/axios-client"
import { useMutation } from "@tanstack/react-query"
import type {
  ApiV1ServiceAdminPromocodeListCreateMutationRequest,
  ApiV1ServiceAdminPromocodeListCreateMutationResponse,
  ApiV1ServiceAdminPromocodeListCreate201,
} from "../../../models/ts/apiController/ApiV1ServiceAdminPromocodeListCreate"
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

type ApiV1ServiceAdminPromocodeListCreateClient = typeof client<
  ApiV1ServiceAdminPromocodeListCreateMutationResponse,
  ApiV1ServiceAdminPromocodeListCreate201,
  ApiV1ServiceAdminPromocodeListCreateMutationRequest
>
type ApiV1ServiceAdminPromocodeListCreate = {
  data: ApiV1ServiceAdminPromocodeListCreateMutationResponse
  error: ApiV1ServiceAdminPromocodeListCreate201
  request: ApiV1ServiceAdminPromocodeListCreateMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminPromocodeListCreateClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminPromocodeListCreateClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminPromocodeListCreateClient>>
  }
}
/**
 * @description Параметры фильтрации списка промокодов:- promocode_type - тип промокода, возможные значения amount/percent- is_active - активность промокода, возможные значения true/false- code - фраза для регистронезависимого поиска в поле code
 * @summary Список промокодов, создание нового промокода.
 * @link /api/v1/service/admin/promocode/list/ */
export function useApiV1ServiceAdminPromocodeListCreate(
  options: {
    mutation?: UseMutationOptions<ApiV1ServiceAdminPromocodeListCreate["response"], ApiV1ServiceAdminPromocodeListCreate["error"], ApiV1ServiceAdminPromocodeListCreate["request"]>
    client?: ApiV1ServiceAdminPromocodeListCreate["client"]["parameters"]
  } = {},
): UseMutationResult<ApiV1ServiceAdminPromocodeListCreate["response"], ApiV1ServiceAdminPromocodeListCreate["error"], ApiV1ServiceAdminPromocodeListCreate["request"]> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<ApiV1ServiceAdminPromocodeListCreate["response"], ApiV1ServiceAdminPromocodeListCreate["error"], ApiV1ServiceAdminPromocodeListCreate["request"]>({
    mutationFn: async (data) => {
      const res = await client<ApiV1ServiceAdminPromocodeListCreate["data"], ApiV1ServiceAdminPromocodeListCreate["error"], ApiV1ServiceAdminPromocodeListCreate["request"]>({
        method: "post",
        url: `/api/v1/service/admin/promocode/list/`,
        data,
        ...clientOptions,
      })
      return res
    },
    ...mutationOptions,
  })
}
