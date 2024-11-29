import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1NewsAdminReadQueryResponse, ApiV1NewsAdminReadPathParams } from "../../../models/ts/apiController/ApiV1NewsAdminRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1NewsAdminReadClient = typeof client<ApiV1NewsAdminReadQueryResponse, never, never>
type ApiV1NewsAdminRead = {
  data: ApiV1NewsAdminReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1NewsAdminReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1NewsAdminReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1NewsAdminReadClient>[0]>
    return: Awaited<ReturnType<ApiV1NewsAdminReadClient>>
  }
}
export const apiV1NewsAdminReadQueryKey = (id: ApiV1NewsAdminReadPathParams["id"]) => [{ url: "/api/v1/news/admin/:id/", params: { id: id } }] as const
export type ApiV1NewsAdminReadQueryKey = ReturnType<typeof apiV1NewsAdminReadQueryKey>
export function apiV1NewsAdminReadQueryOptions<TData = ApiV1NewsAdminRead["response"], TQueryData = ApiV1NewsAdminRead["response"]>(
  id: ApiV1NewsAdminReadPathParams["id"],
  options: ApiV1NewsAdminRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1NewsAdminRead["response"], ApiV1NewsAdminRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsAdminReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1NewsAdminRead["data"], ApiV1NewsAdminRead["error"]>({
        method: "get",
        url: `/api/v1/news/admin/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export function useApiV1NewsAdminRead<TData = ApiV1NewsAdminRead["response"], TQueryData = ApiV1NewsAdminRead["response"], TQueryKey extends QueryKey = ApiV1NewsAdminReadQueryKey>(
  id: ApiV1NewsAdminReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1NewsAdminRead["response"], ApiV1NewsAdminRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsAdminRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1NewsAdminRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsAdminReadQueryKey(id)
  const query = useQuery<ApiV1NewsAdminRead["data"], ApiV1NewsAdminRead["error"], TData, any>({
    ...apiV1NewsAdminReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1NewsAdminRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1NewsAdminReadInfiniteQueryKey = (id: ApiV1NewsAdminReadPathParams["id"]) => [{ url: "/api/v1/news/admin/:id/", params: { id: id } }] as const
export type ApiV1NewsAdminReadInfiniteQueryKey = ReturnType<typeof apiV1NewsAdminReadInfiniteQueryKey>
export function apiV1NewsAdminReadInfiniteQueryOptions<TData = ApiV1NewsAdminRead["response"], TQueryData = ApiV1NewsAdminRead["response"]>(
  id: ApiV1NewsAdminReadPathParams["id"],
  options: ApiV1NewsAdminRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1NewsAdminRead["response"], ApiV1NewsAdminRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1NewsAdminReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1NewsAdminRead["data"], ApiV1NewsAdminRead["error"]>({
        method: "get",
        url: `/api/v1/news/admin/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_countries_can_not_be_empty**Список стран не может быть пустым.
 * @summary Просмотр, изменение, удаление новости.
 * @link /api/v1/news/admin/:id/ */
export function useApiV1NewsAdminReadInfinite<
  TData = InfiniteData<ApiV1NewsAdminRead["response"]>,
  TQueryData = ApiV1NewsAdminRead["response"],
  TQueryKey extends QueryKey = ApiV1NewsAdminReadInfiniteQueryKey,
>(
  id: ApiV1NewsAdminReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1NewsAdminRead["response"], ApiV1NewsAdminRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1NewsAdminRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1NewsAdminRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1NewsAdminReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1NewsAdminRead["data"], ApiV1NewsAdminRead["error"], TData, any>({
    ...apiV1NewsAdminReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1NewsAdminRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
