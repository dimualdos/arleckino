import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ActionsAdminGroupsReadQueryResponse, ApiV1ActionsAdminGroupsReadPathParams } from "../../../models/ts/apiController/ApiV1ActionsAdminGroupsRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ActionsAdminGroupsReadClient = typeof client<ApiV1ActionsAdminGroupsReadQueryResponse, never, never>
type ApiV1ActionsAdminGroupsRead = {
  data: ApiV1ActionsAdminGroupsReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ActionsAdminGroupsReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ActionsAdminGroupsReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ActionsAdminGroupsReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ActionsAdminGroupsReadClient>>
  }
}
export const apiV1ActionsAdminGroupsReadQueryKey = (id: ApiV1ActionsAdminGroupsReadPathParams["id"]) => [{ url: "/api/v1/actions/admin/groups/:id/", params: { id: id } }] as const
export type ApiV1ActionsAdminGroupsReadQueryKey = ReturnType<typeof apiV1ActionsAdminGroupsReadQueryKey>
export function apiV1ActionsAdminGroupsReadQueryOptions<TData = ApiV1ActionsAdminGroupsRead["response"], TQueryData = ApiV1ActionsAdminGroupsRead["response"]>(
  id: ApiV1ActionsAdminGroupsReadPathParams["id"],
  options: ApiV1ActionsAdminGroupsRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ActionsAdminGroupsRead["response"], ApiV1ActionsAdminGroupsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminGroupsReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ActionsAdminGroupsRead["data"], ApiV1ActionsAdminGroupsRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/groups/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export function useApiV1ActionsAdminGroupsRead<
  TData = ApiV1ActionsAdminGroupsRead["response"],
  TQueryData = ApiV1ActionsAdminGroupsRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminGroupsReadQueryKey,
>(
  id: ApiV1ActionsAdminGroupsReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ActionsAdminGroupsRead["response"], ApiV1ActionsAdminGroupsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminGroupsRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ActionsAdminGroupsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminGroupsReadQueryKey(id)
  const query = useQuery<ApiV1ActionsAdminGroupsRead["data"], ApiV1ActionsAdminGroupsRead["error"], TData, any>({
    ...apiV1ActionsAdminGroupsReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ActionsAdminGroupsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ActionsAdminGroupsReadInfiniteQueryKey = (id: ApiV1ActionsAdminGroupsReadPathParams["id"]) => [{ url: "/api/v1/actions/admin/groups/:id/", params: { id: id } }] as const
export type ApiV1ActionsAdminGroupsReadInfiniteQueryKey = ReturnType<typeof apiV1ActionsAdminGroupsReadInfiniteQueryKey>
export function apiV1ActionsAdminGroupsReadInfiniteQueryOptions<TData = ApiV1ActionsAdminGroupsRead["response"], TQueryData = ApiV1ActionsAdminGroupsRead["response"]>(
  id: ApiV1ActionsAdminGroupsReadPathParams["id"],
  options: ApiV1ActionsAdminGroupsRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ActionsAdminGroupsRead["response"], ApiV1ActionsAdminGroupsRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ActionsAdminGroupsReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ActionsAdminGroupsRead["data"], ApiV1ActionsAdminGroupsRead["error"]>({
        method: "get",
        url: `/api/v1/actions/admin/groups/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Представление для выборки данных о группе действий
 * @link /api/v1/actions/admin/groups/:id/ */
export function useApiV1ActionsAdminGroupsReadInfinite<
  TData = InfiniteData<ApiV1ActionsAdminGroupsRead["response"]>,
  TQueryData = ApiV1ActionsAdminGroupsRead["response"],
  TQueryKey extends QueryKey = ApiV1ActionsAdminGroupsReadInfiniteQueryKey,
>(
  id: ApiV1ActionsAdminGroupsReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ActionsAdminGroupsRead["response"], ApiV1ActionsAdminGroupsRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ActionsAdminGroupsRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ActionsAdminGroupsRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ActionsAdminGroupsReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ActionsAdminGroupsRead["data"], ApiV1ActionsAdminGroupsRead["error"], TData, any>({
    ...apiV1ActionsAdminGroupsReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ActionsAdminGroupsRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
