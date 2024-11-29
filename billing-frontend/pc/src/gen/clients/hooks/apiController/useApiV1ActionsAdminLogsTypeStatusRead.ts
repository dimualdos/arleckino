import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminLogsTypeStatusReadQueryResponse,
  ApiV1ActionsAdminLogsTypeStatusReadPathParams,
  ApiV1ActionsAdminLogsTypeStatusReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsTypeStatusRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminLogsTypeStatusReadClient = typeof client<ApiV1ActionsAdminLogsTypeStatusReadQueryResponse, never, never>
type ApiV1ActionsAdminLogsTypeStatusRead = {
  data: ApiV1ActionsAdminLogsTypeStatusReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsAdminLogsTypeStatusReadPathParams
  queryParams: ApiV1ActionsAdminLogsTypeStatusReadQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminLogsTypeStatusReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminLogsTypeStatusReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminLogsTypeStatusReadClient>>
  }
}
export const apiV1ActionsAdminLogsTypeStatusReadQueryKey = (
  actionStatusTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionStatusTypeId"],
  actionTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeStatusRead["queryParams"],
) =>
  [
    { url: "/api/v1/actions/admin/logs/type/:actionTypeId/status/:actionStatusTypeId", params: { actionTypeId: actionTypeId, actionStatusTypeId: actionStatusTypeId } },
    ...(params ? [params] : []),
  ] as const
export type ApiV1ActionsAdminLogsTypeStatusReadQueryKey = ReturnType<typeof apiV1ActionsAdminLogsTypeStatusReadQueryKey>
export function apiV1ActionsAdminLogsTypeStatusReadQueryOptions<TData = ApiV1ActionsAdminLogsTypeStatusRead["response"], TQueryData = ApiV1ActionsAdminLogsTypeStatusRead["response"]>(
  actionStatusTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionStatusTypeId"],
  actionTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeStatusRead["queryParams"],
  options: ApiV1ActionsAdminLogsTypeStatusRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminLogsTypeStatusRead["response"], ApiV1ActionsAdminLogsTypeStatusRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsTypeStatusReadQueryKey(actionStatusTypeId, actionTypeId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminLogsTypeStatusRead["data"], ApiV1ActionsAdminLogsTypeStatusRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/type/${actionTypeId}/status/${actionStatusTypeId}`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки логов конкретного типа и статуса
 * @link /api/v1/actions/admin/logs/type/:actionTypeId/status/:actionStatusTypeId */
export function useApiV1ActionsAdminLogsTypeStatusRead<
  TData = ApiV1ActionsAdminLogsTypeStatusRead["response"],
  TQueryData = ApiV1ActionsAdminLogsTypeStatusRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsTypeStatusReadQueryKey,
>(
  actionStatusTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionStatusTypeId"],
  actionTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeStatusRead["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminLogsTypeStatusRead["response"], ApiV1ActionsAdminLogsTypeStatusRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsTypeStatusRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminLogsTypeStatusRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsTypeStatusReadQueryKey(actionStatusTypeId, actionTypeId, params)
  const query = useQuery<ApiV1ActionsAdminLogsTypeStatusRead["data"], ApiV1ActionsAdminLogsTypeStatusRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsTypeStatusReadQueryOptions<TData, TQueryData>(actionStatusTypeId, actionTypeId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminLogsTypeStatusRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminLogsTypeStatusReadInfiniteQueryKey = (
  actionStatusTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionStatusTypeId"],
  actionTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeStatusRead["queryParams"],
) =>
  [
    { url: "/api/v1/actions/admin/logs/type/:actionTypeId/status/:actionStatusTypeId", params: { actionTypeId: actionTypeId, actionStatusTypeId: actionStatusTypeId } },
    ...(params ? [params] : []),
  ] as const
export type ApiV1ActionsAdminLogsTypeStatusReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminLogsTypeStatusReadInfiniteQueryKey>
export function apiV1ActionsAdminLogsTypeStatusReadInfiniteQueryOptions<TData = ApiV1ActionsAdminLogsTypeStatusRead["response"], TQueryData = ApiV1ActionsAdminLogsTypeStatusRead["response"]>(
  actionStatusTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionStatusTypeId"],
  actionTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeStatusRead["queryParams"],
  options: ApiV1ActionsAdminLogsTypeStatusRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsTypeStatusRead["response"], ApiV1ActionsAdminLogsTypeStatusRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsTypeStatusReadInfiniteQueryKey(actionStatusTypeId, actionTypeId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminLogsTypeStatusRead["data"], ApiV1ActionsAdminLogsTypeStatusRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/type/${actionTypeId}/status/${actionStatusTypeId}`,
        ...options,
        params: {
          ...params,
          ["id"]: pageParam,
          ...(options.params || {}),
        },
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки логов конкретного типа и статуса
 * @link /api/v1/actions/admin/logs/type/:actionTypeId/status/:actionStatusTypeId */
export function useApiV1ActionsAdminLogsTypeStatusReadInfinite<
  TData = InfiniteData<ApiV1ActionsAdminLogsTypeStatusRead["response"]>,
  TQueryData = ApiV1ActionsAdminLogsTypeStatusRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsTypeStatusReadInfiniteQueryKey,
>(
  actionStatusTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionStatusTypeId"],
  actionTypeId: ApiV1ActionsAdminLogsTypeStatusReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeStatusRead["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsTypeStatusRead["response"], ApiV1ActionsAdminLogsTypeStatusRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsTypeStatusRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsTypeStatusRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsTypeStatusReadInfiniteQueryKey(actionStatusTypeId, actionTypeId, params)
  const query = useInfiniteQuery<ApiV1ActionsAdminLogsTypeStatusRead["data"], ApiV1ActionsAdminLogsTypeStatusRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsTypeStatusReadInfiniteQueryOptions<TData, TQueryData>(actionStatusTypeId, actionTypeId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsTypeStatusRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
