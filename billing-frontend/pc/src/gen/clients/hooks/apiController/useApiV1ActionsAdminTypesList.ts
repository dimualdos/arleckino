import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsAdminTypesListQueryResponse, ApiV1ActionsAdminTypesListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsAdminTypesList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminTypesListClient = typeof client<ApiV1ActionsAdminTypesListQueryResponse, never, never>
type ApiV1ActionsAdminTypesList = {
  data: ApiV1ActionsAdminTypesListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ActionsAdminTypesListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminTypesListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminTypesListClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminTypesListClient>>
  }
}
export const apiV1ActionsAdminTypesListQueryKey = (params?: ApiV1ActionsAdminTypesList["queryParams"]) => [{ url: "/api/v1/actions/admin/types/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminTypesListQueryKey = ReturnType<typeof apiV1ActionsAdminTypesListQueryKey>
export function apiV1ActionsAdminTypesListQueryOptions<TData = ApiV1ActionsAdminTypesList["response"], TQueryData = ApiV1ActionsAdminTypesList["response"]>(
  params?: ApiV1ActionsAdminTypesList["queryParams"],
  options: ApiV1ActionsAdminTypesList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminTypesList["response"], ApiV1ActionsAdminTypesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminTypesListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminTypesList["data"], ApiV1ActionsAdminTypesList["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/types/`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки всех типов действий
 * @link /api/v1/actions/admin/types/ */
export function useApiV1ActionsAdminTypesList<
  TData = ApiV1ActionsAdminTypesList["response"],
  TQueryData = ApiV1ActionsAdminTypesList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminTypesListQueryKey,
>(
  params?: ApiV1ActionsAdminTypesList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminTypesList["response"], ApiV1ActionsAdminTypesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminTypesList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminTypesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminTypesListQueryKey(params)
  const query = useQuery<ApiV1ActionsAdminTypesList["data"], ApiV1ActionsAdminTypesList["error"], TData, any>({
    ...apiV1ActionsAdminTypesListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminTypesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminTypesListInfiniteQueryKey = (params?: ApiV1ActionsAdminTypesList["queryParams"]) => [{ url: "/api/v1/actions/admin/types/" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminTypesListInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminTypesListInfiniteQueryKey>
export function apiV1ActionsAdminTypesListInfiniteQueryOptions<TData = ApiV1ActionsAdminTypesList["response"], TQueryData = ApiV1ActionsAdminTypesList["response"]>(
  params?: ApiV1ActionsAdminTypesList["queryParams"],
  options: ApiV1ActionsAdminTypesList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminTypesList["response"], ApiV1ActionsAdminTypesList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminTypesListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminTypesList["data"], ApiV1ActionsAdminTypesList["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/types/`,
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
 * @description Представление для выборки всех типов действий
 * @link /api/v1/actions/admin/types/ */
export function useApiV1ActionsAdminTypesListInfinite<
  TData = InfiniteData<ApiV1ActionsAdminTypesList["response"]>,
  TQueryData = ApiV1ActionsAdminTypesList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminTypesListInfiniteQueryKey,
>(
  params?: ApiV1ActionsAdminTypesList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminTypesList["response"], ApiV1ActionsAdminTypesList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminTypesList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminTypesList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminTypesListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ActionsAdminTypesList["data"], ApiV1ActionsAdminTypesList["error"], TData, any>({
    ...apiV1ActionsAdminTypesListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminTypesList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
