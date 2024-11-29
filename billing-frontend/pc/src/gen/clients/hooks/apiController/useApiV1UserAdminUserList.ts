import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserListQueryResponse, ApiV1UserAdminUserListQueryParams } from "../../../models/ts/apiController/ApiV1UserAdminUserList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserListClient = typeof client<ApiV1UserAdminUserListQueryResponse, never, never>
type ApiV1UserAdminUserList = {
  data: ApiV1UserAdminUserListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserAdminUserListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserListClient>>
  }
}
export const apiV1UserAdminUserListQueryKey = (params?: ApiV1UserAdminUserList["queryParams"]) => [{ url: "/api/v1/user/admin/user" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserListQueryKey = ReturnType<typeof apiV1UserAdminUserListQueryKey>
export function apiV1UserAdminUserListQueryOptions<TData = ApiV1UserAdminUserList["response"], TQueryData = ApiV1UserAdminUserList["response"]>(
  params?: ApiV1UserAdminUserList["queryParams"],
  options: ApiV1UserAdminUserList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserList["response"], ApiV1UserAdminUserList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserList["data"], ApiV1UserAdminUserList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Список пользователей
 * @link /api/v1/user/admin/user */
export function useApiV1UserAdminUserList<TData = ApiV1UserAdminUserList["response"], TQueryData = ApiV1UserAdminUserList["response"], TQueryKey extends QueryKey = ApiV1UserAdminUserListQueryKey>(
  params?: ApiV1UserAdminUserList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserList["response"], ApiV1UserAdminUserList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserListQueryKey(params)
  const query = useQuery<ApiV1UserAdminUserList["data"], ApiV1UserAdminUserList["error"], TData, any>({
    ...apiV1UserAdminUserListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserListInfiniteQueryKey = (params?: ApiV1UserAdminUserList["queryParams"]) => [{ url: "/api/v1/user/admin/user" }, ...(params ? [params] : [])] as const
export type ApiV1UserAdminUserListInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserListInfiniteQueryKey>
export function apiV1UserAdminUserListInfiniteQueryOptions<TData = ApiV1UserAdminUserList["response"], TQueryData = ApiV1UserAdminUserList["response"]>(
  params?: ApiV1UserAdminUserList["queryParams"],
  options: ApiV1UserAdminUserList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserList["response"], ApiV1UserAdminUserList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserList["data"], ApiV1UserAdminUserList["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user`,
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
 * @description .
 * @summary Список пользователей
 * @link /api/v1/user/admin/user */
export function useApiV1UserAdminUserListInfinite<
  TData = InfiniteData<ApiV1UserAdminUserList["response"]>,
  TQueryData = ApiV1UserAdminUserList["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserListInfiniteQueryKey,
>(
  params?: ApiV1UserAdminUserList["queryParams"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserList["response"], ApiV1UserAdminUserList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserAdminUserList["data"], ApiV1UserAdminUserList["error"], TData, any>({
    ...apiV1UserAdminUserListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
