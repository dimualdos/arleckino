import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1ActionsAdminLogsTypeReadQueryResponse,
  ApiV1ActionsAdminLogsTypeReadPathParams,
  ApiV1ActionsAdminLogsTypeReadQueryParams,
} from "../../../models/ts/apiController/ApiV1ActionsAdminLogsTypeRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminLogsTypeReadClient = typeof client<ApiV1ActionsAdminLogsTypeReadQueryResponse, never, never>
type ApiV1ActionsAdminLogsTypeRead = {
  data: ApiV1ActionsAdminLogsTypeReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsAdminLogsTypeReadPathParams
  queryParams: ApiV1ActionsAdminLogsTypeReadQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminLogsTypeReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminLogsTypeReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminLogsTypeReadClient>>
  }
}
export const apiV1ActionsAdminLogsTypeReadQueryKey = (actionTypeId: ApiV1ActionsAdminLogsTypeReadPathParams["actionTypeId"], params?: ApiV1ActionsAdminLogsTypeRead["queryParams"]) =>
  [{ url: "/api/v1/actions/admin/logs/type/:actionTypeId", params: { actionTypeId: actionTypeId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsTypeReadQueryKey = ReturnType<typeof apiV1ActionsAdminLogsTypeReadQueryKey>
export function apiV1ActionsAdminLogsTypeReadQueryOptions<TData = ApiV1ActionsAdminLogsTypeRead["response"], TQueryData = ApiV1ActionsAdminLogsTypeRead["response"]>(
  actionTypeId: ApiV1ActionsAdminLogsTypeReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeRead["queryParams"],
  options: ApiV1ActionsAdminLogsTypeRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminLogsTypeRead["response"], ApiV1ActionsAdminLogsTypeRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsTypeReadQueryKey(actionTypeId, params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminLogsTypeRead["data"], ApiV1ActionsAdminLogsTypeRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/type/${actionTypeId}`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки логов конкретного типа
 * @link /api/v1/actions/admin/logs/type/:actionTypeId */
export function useApiV1ActionsAdminLogsTypeRead<
  TData = ApiV1ActionsAdminLogsTypeRead["response"],
  TQueryData = ApiV1ActionsAdminLogsTypeRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsTypeReadQueryKey,
>(
  actionTypeId: ApiV1ActionsAdminLogsTypeReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeRead["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminLogsTypeRead["response"], ApiV1ActionsAdminLogsTypeRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsTypeRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminLogsTypeRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsTypeReadQueryKey(actionTypeId, params)
  const query = useQuery<ApiV1ActionsAdminLogsTypeRead["data"], ApiV1ActionsAdminLogsTypeRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsTypeReadQueryOptions<TData, TQueryData>(actionTypeId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminLogsTypeRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminLogsTypeReadInfiniteQueryKey = (actionTypeId: ApiV1ActionsAdminLogsTypeReadPathParams["actionTypeId"], params?: ApiV1ActionsAdminLogsTypeRead["queryParams"]) =>
  [{ url: "/api/v1/actions/admin/logs/type/:actionTypeId", params: { actionTypeId: actionTypeId } }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsTypeReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminLogsTypeReadInfiniteQueryKey>
export function apiV1ActionsAdminLogsTypeReadInfiniteQueryOptions<TData = ApiV1ActionsAdminLogsTypeRead["response"], TQueryData = ApiV1ActionsAdminLogsTypeRead["response"]>(
  actionTypeId: ApiV1ActionsAdminLogsTypeReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeRead["queryParams"],
  options: ApiV1ActionsAdminLogsTypeRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsTypeRead["response"], ApiV1ActionsAdminLogsTypeRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsTypeReadInfiniteQueryKey(actionTypeId, params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminLogsTypeRead["data"], ApiV1ActionsAdminLogsTypeRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/type/${actionTypeId}`,
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
 * @description Представление для выборки логов конкретного типа
 * @link /api/v1/actions/admin/logs/type/:actionTypeId */
export function useApiV1ActionsAdminLogsTypeReadInfinite<
  TData = InfiniteData<ApiV1ActionsAdminLogsTypeRead["response"]>,
  TQueryData = ApiV1ActionsAdminLogsTypeRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsTypeReadInfiniteQueryKey,
>(
  actionTypeId: ApiV1ActionsAdminLogsTypeReadPathParams["actionTypeId"],
  params?: ApiV1ActionsAdminLogsTypeRead["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsTypeRead["response"], ApiV1ActionsAdminLogsTypeRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsTypeRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsTypeRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsTypeReadInfiniteQueryKey(actionTypeId, params)
  const query = useInfiniteQuery<ApiV1ActionsAdminLogsTypeRead["data"], ApiV1ActionsAdminLogsTypeRead["error"], TData, any>({
    ...apiV1ActionsAdminLogsTypeReadInfiniteQueryOptions<TData, TQueryData>(actionTypeId, params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsTypeRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
