import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsAdminGroupsListQueryResponse, ApiV1ActionsAdminGroupsListQueryParams } from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminGroupsListClient = typeof client<ApiV1ActionsAdminGroupsListQueryResponse, never, never>
type ApiV1ActionsAdminGroupsList = {
  data: ApiV1ActionsAdminGroupsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1ActionsAdminGroupsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminGroupsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminGroupsListClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminGroupsListClient>>
  }
}
export const apiV1ActionsAdminGroupsListQueryKey = (params?: ApiV1ActionsAdminGroupsList["queryParams"]) => [{ url: "/api/v1/actions/admin/groups" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminGroupsListQueryKey = ReturnType<typeof apiV1ActionsAdminGroupsListQueryKey>
export function apiV1ActionsAdminGroupsListQueryOptions<TData = ApiV1ActionsAdminGroupsList["response"], TQueryData = ApiV1ActionsAdminGroupsList["response"]>(
  params?: ApiV1ActionsAdminGroupsList["queryParams"],
  options: ApiV1ActionsAdminGroupsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminGroupsList["response"], ApiV1ActionsAdminGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminGroupsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminGroupsList["data"], ApiV1ActionsAdminGroupsList["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/groups`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки всех групп логов
 * @link /api/v1/actions/admin/groups */
export function useApiV1ActionsAdminGroupsList<
  TData = ApiV1ActionsAdminGroupsList["response"],
  TQueryData = ApiV1ActionsAdminGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminGroupsListQueryKey,
>(
  params?: ApiV1ActionsAdminGroupsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminGroupsList["response"], ApiV1ActionsAdminGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminGroupsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminGroupsListQueryKey(params)
  const query = useQuery<ApiV1ActionsAdminGroupsList["data"], ApiV1ActionsAdminGroupsList["error"], TData, any>({
    ...apiV1ActionsAdminGroupsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminGroupsListInfiniteQueryKey = (params?: ApiV1ActionsAdminGroupsList["queryParams"]) => [{ url: "/api/v1/actions/admin/groups" }, ...(params ? [params] : [])] as const
export type ApiV1ActionsAdminGroupsListInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminGroupsListInfiniteQueryKey>
export function apiV1ActionsAdminGroupsListInfiniteQueryOptions<TData = ApiV1ActionsAdminGroupsList["response"], TQueryData = ApiV1ActionsAdminGroupsList["response"]>(
  params?: ApiV1ActionsAdminGroupsList["queryParams"],
  options: ApiV1ActionsAdminGroupsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminGroupsList["response"], ApiV1ActionsAdminGroupsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminGroupsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminGroupsList["data"], ApiV1ActionsAdminGroupsList["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/groups`,
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
 * @description Представление для выборки всех групп логов
 * @link /api/v1/actions/admin/groups */
export function useApiV1ActionsAdminGroupsListInfinite<
  TData = InfiniteData<ApiV1ActionsAdminGroupsList["response"]>,
  TQueryData = ApiV1ActionsAdminGroupsList["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminGroupsListInfiniteQueryKey,
>(
  params?: ApiV1ActionsAdminGroupsList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminGroupsList["response"], ApiV1ActionsAdminGroupsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminGroupsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminGroupsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminGroupsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1ActionsAdminGroupsList["data"], ApiV1ActionsAdminGroupsList["error"], TData, any>({
    ...apiV1ActionsAdminGroupsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminGroupsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
