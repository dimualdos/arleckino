import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsAdminLogsListQueryResponse, ApiV1ActionsAdminLogsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsAdminLogsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminLogsListClient = typeof client<ApiV1ActionsAdminLogsListQueryResponse, never, never>
type ApiV1ActionsAdminLogsList = {
  data: ApiV1ActionsAdminLogsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ActionsAdminLogsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminLogsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminLogsListClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminLogsListClient>>
  }
}
export const apiV1ActionsAdminLogsListQueryKey = (params?: ApiV1ActionsAdminLogsList["queryParams"]) => [{ url: "/api/v1/actions/admin/logs/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsListQueryKey = ReturnType<typeof apiV1ActionsAdminLogsListQueryKey>
export function apiV1ActionsAdminLogsListQueryOptions<TData = ApiV1ActionsAdminLogsList["response"], TQueryData = ApiV1ActionsAdminLogsList["response"]>(
  params?: ApiV1ActionsAdminLogsList["queryParams"],
  options: ApiV1ActionsAdminLogsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminLogsList["response"], ApiV1ActionsAdminLogsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminLogsList["data"], ApiV1ActionsAdminLogsList["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки всех логов
 * @link /api/v1/actions/admin/logs/ */
export function useApiV1ActionsAdminLogsList<
  TData = ApiV1ActionsAdminLogsList["response"],
  TQueryData = ApiV1ActionsAdminLogsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsListQueryKey,
>(
  params?: ApiV1ActionsAdminLogsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminLogsList["response"], ApiV1ActionsAdminLogsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminLogsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsListQueryKey(params)
  const query = useQuery<ApiV1ActionsAdminLogsList["data"], ApiV1ActionsAdminLogsList["error"], TData, any>({
    ...apiV1ActionsAdminLogsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminLogsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminLogsListInfiniteQueryKey = (params?: ApiV1ActionsAdminLogsList["queryParams"]) => [{ url: "/api/v1/actions/admin/logs/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminLogsListInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminLogsListInfiniteQueryKey>
export function apiV1ActionsAdminLogsListInfiniteQueryOptions<TData = ApiV1ActionsAdminLogsList["response"], TQueryData = ApiV1ActionsAdminLogsList["response"]>(
  params?: ApiV1ActionsAdminLogsList["queryParams"],
  options: ApiV1ActionsAdminLogsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsList["response"], ApiV1ActionsAdminLogsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminLogsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminLogsList["data"], ApiV1ActionsAdminLogsList["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/logs/`,
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
 * @description Представление для выборки всех логов
 * @link /api/v1/actions/admin/logs/ */
export function useApiV1ActionsAdminLogsListInfinite<
  TData = InfiniteData<ApiV1ActionsAdminLogsList["response"]>,
  TQueryData = ApiV1ActionsAdminLogsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminLogsListInfiniteQueryKey,
>(
  params?: ApiV1ActionsAdminLogsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminLogsList["response"], ApiV1ActionsAdminLogsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminLogsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminLogsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ActionsAdminLogsList["data"], ApiV1ActionsAdminLogsList["error"], TData, any>({
    ...apiV1ActionsAdminLogsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminLogsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
