import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1FaqAdminReadQueryResponse, ApiV1FaqAdminReadPathParams } from "../../../models/ts/apiController/ApiV1FaqAdminRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1FaqAdminReadClient = typeof client<ApiV1FaqAdminReadQueryResponse, never, never>
type ApiV1FaqAdminRead = {
  data: ApiV1FaqAdminReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1FaqAdminReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1FaqAdminReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1FaqAdminReadClient>[0]>
    return: Awaited<ReturnType<ApiV1FaqAdminReadClient>>
  }
}
export const apiV1FaqAdminReadQueryKey = (id: ApiV1FaqAdminReadPathParams["id"]) => [{ url: "/api/v1/faq/admin/:id/", params: { id: id } }] as const
export type ApiV1FaqAdminReadQueryKey = ReturnType<typeof apiV1FaqAdminReadQueryKey>
export function apiV1FaqAdminReadQueryOptions<TData = ApiV1FaqAdminRead["response"], TQueryData = ApiV1FaqAdminRead["response"]>(
  id: ApiV1FaqAdminReadPathParams["id"],
  options: ApiV1FaqAdminRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1FaqAdminRead["response"], ApiV1FaqAdminRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1FaqAdminRead["data"], ApiV1FaqAdminRead["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export function useApiV1FaqAdminRead<TData = ApiV1FaqAdminRead["response"], TQueryData = ApiV1FaqAdminRead["response"], TQueryKey extends QueryKey = ApiV1FaqAdminReadQueryKey>(
  id: ApiV1FaqAdminReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1FaqAdminRead["response"], ApiV1FaqAdminRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1FaqAdminRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminReadQueryKey(id)
  const query = useQuery<ApiV1FaqAdminRead["data"], ApiV1FaqAdminRead["error"], TData, any>({
    ...apiV1FaqAdminReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1FaqAdminRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1FaqAdminReadInfiniteQueryKey = (id: ApiV1FaqAdminReadPathParams["id"]) => [{ url: "/api/v1/faq/admin/:id/", params: { id: id } }] as const
export type ApiV1FaqAdminReadInfiniteQueryKey = ReturnType<typeof apiV1FaqAdminReadInfiniteQueryKey>
export function apiV1FaqAdminReadInfiniteQueryOptions<TData = ApiV1FaqAdminRead["response"], TQueryData = ApiV1FaqAdminRead["response"]>(
  id: ApiV1FaqAdminReadPathParams["id"],
  options: ApiV1FaqAdminRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1FaqAdminRead["response"], ApiV1FaqAdminRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1FaqAdminReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1FaqAdminRead["data"], ApiV1FaqAdminRead["error"]>({
        method: "get",
        url: `/api/v1/faq/admin/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **list_of_answers_can_not_be_empty**Список ответов не может быть пустым.
 * @summary Просмотр, изменение, удаление вопроса.
 * @link /api/v1/faq/admin/:id/ */
export function useApiV1FaqAdminReadInfinite<
  TData = InfiniteData<ApiV1FaqAdminRead["response"]>,
  TQueryData = ApiV1FaqAdminRead["response"],
  TQueryKey extends QueryKey = ApiV1FaqAdminReadInfiniteQueryKey,
>(
  id: ApiV1FaqAdminReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1FaqAdminRead["response"], ApiV1FaqAdminRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1FaqAdminRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1FaqAdminRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1FaqAdminReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1FaqAdminRead["data"], ApiV1FaqAdminRead["error"], TData, any>({
    ...apiV1FaqAdminReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1FaqAdminRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
