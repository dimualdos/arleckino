import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1UserAdminUserReadQueryResponse, ApiV1UserAdminUserReadPathParams } from "../../../models/ts/apiController/ApiV1UserAdminUserRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserAdminUserReadClient = typeof client<ApiV1UserAdminUserReadQueryResponse, never, never>
type ApiV1UserAdminUserRead = {
  data: ApiV1UserAdminUserReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1UserAdminUserReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserAdminUserReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserAdminUserReadClient>[0]>
    return: Awaited<ReturnType<ApiV1UserAdminUserReadClient>>
  }
}
export const apiV1UserAdminUserReadQueryKey = (id: ApiV1UserAdminUserReadPathParams["id"]) => [{ url: "/api/v1/user/admin/user/:id", params: { id: id } }] as const
export type ApiV1UserAdminUserReadQueryKey = ReturnType<typeof apiV1UserAdminUserReadQueryKey>
export function apiV1UserAdminUserReadQueryOptions<TData = ApiV1UserAdminUserRead["response"], TQueryData = ApiV1UserAdminUserRead["response"]>(
  id: ApiV1UserAdminUserReadPathParams["id"],
  options: ApiV1UserAdminUserRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserAdminUserRead["response"], ApiV1UserAdminUserRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserAdminUserRead["data"], ApiV1UserAdminUserRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр и изменение информации о пользователе администратором
 * @link /api/v1/user/admin/user/:id */
export function useApiV1UserAdminUserRead<TData = ApiV1UserAdminUserRead["response"], TQueryData = ApiV1UserAdminUserRead["response"], TQueryKey extends QueryKey = ApiV1UserAdminUserReadQueryKey>(
  id: ApiV1UserAdminUserReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserAdminUserRead["response"], ApiV1UserAdminUserRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserAdminUserRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReadQueryKey(id)
  const query = useQuery<ApiV1UserAdminUserRead["data"], ApiV1UserAdminUserRead["error"], TData, any>({
    ...apiV1UserAdminUserReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserAdminUserRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserAdminUserReadInfiniteQueryKey = (id: ApiV1UserAdminUserReadPathParams["id"]) => [{ url: "/api/v1/user/admin/user/:id", params: { id: id } }] as const
export type ApiV1UserAdminUserReadInfiniteQueryKey = ReturnType<typeof apiV1UserAdminUserReadInfiniteQueryKey>
export function apiV1UserAdminUserReadInfiniteQueryOptions<TData = ApiV1UserAdminUserRead["response"], TQueryData = ApiV1UserAdminUserRead["response"]>(
  id: ApiV1UserAdminUserReadPathParams["id"],
  options: ApiV1UserAdminUserRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserAdminUserRead["response"], ApiV1UserAdminUserRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserAdminUserReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserAdminUserRead["data"], ApiV1UserAdminUserRead["error"]>({
        method: "get",
        url: `/api/v1/user/admin/user/${id}`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description .
 * @summary Просмотр и изменение информации о пользователе администратором
 * @link /api/v1/user/admin/user/:id */
export function useApiV1UserAdminUserReadInfinite<
  TData = InfiniteData<ApiV1UserAdminUserRead["response"]>,
  TQueryData = ApiV1UserAdminUserRead["response"],
  TQueryKey extends QueryKey = ApiV1UserAdminUserReadInfiniteQueryKey,
>(
  id: ApiV1UserAdminUserReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1UserAdminUserRead["response"], ApiV1UserAdminUserRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserAdminUserRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserAdminUserRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserAdminUserReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1UserAdminUserRead["data"], ApiV1UserAdminUserRead["error"], TData, any>({
    ...apiV1UserAdminUserReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserAdminUserRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
