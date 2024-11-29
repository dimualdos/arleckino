import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1ServiceAdminDomainReadQueryResponse, ApiV1ServiceAdminDomainReadPathParams } from "../../../models/ts/apiController/ApiV1ServiceAdminDomainRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1ServiceAdminDomainReadClient = typeof client<ApiV1ServiceAdminDomainReadQueryResponse, never, never>
type ApiV1ServiceAdminDomainRead = {
  data: ApiV1ServiceAdminDomainReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1ServiceAdminDomainReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1ServiceAdminDomainReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1ServiceAdminDomainReadClient>[0]>
    return: Awaited<ReturnType<ApiV1ServiceAdminDomainReadClient>>
  }
}
export const apiV1ServiceAdminDomainReadQueryKey = (id: ApiV1ServiceAdminDomainReadPathParams["id"]) => [{ url: "/api/v1/service/admin/domain/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminDomainReadQueryKey = ReturnType<typeof apiV1ServiceAdminDomainReadQueryKey>
export function apiV1ServiceAdminDomainReadQueryOptions<TData = ApiV1ServiceAdminDomainRead["response"], TQueryData = ApiV1ServiceAdminDomainRead["response"]>(
  id: ApiV1ServiceAdminDomainReadPathParams["id"],
  options: ApiV1ServiceAdminDomainRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1ServiceAdminDomainRead["response"], ApiV1ServiceAdminDomainRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminDomainReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1ServiceAdminDomainRead["data"], ApiV1ServiceAdminDomainRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/domain/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export function useApiV1ServiceAdminDomainRead<
  TData = ApiV1ServiceAdminDomainRead["response"],
  TQueryData = ApiV1ServiceAdminDomainRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminDomainReadQueryKey,
>(
  id: ApiV1ServiceAdminDomainReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1ServiceAdminDomainRead["response"], ApiV1ServiceAdminDomainRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminDomainRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1ServiceAdminDomainRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminDomainReadQueryKey(id)
  const query = useQuery<ApiV1ServiceAdminDomainRead["data"], ApiV1ServiceAdminDomainRead["error"], TData, any>({
    ...apiV1ServiceAdminDomainReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1ServiceAdminDomainRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1ServiceAdminDomainReadInfiniteQueryKey = (id: ApiV1ServiceAdminDomainReadPathParams["id"]) => [{ url: "/api/v1/service/admin/domain/:id/", params: { id: id } }] as const
export type ApiV1ServiceAdminDomainReadInfiniteQueryKey = ReturnType<typeof apiV1ServiceAdminDomainReadInfiniteQueryKey>
export function apiV1ServiceAdminDomainReadInfiniteQueryOptions<TData = ApiV1ServiceAdminDomainRead["response"], TQueryData = ApiV1ServiceAdminDomainRead["response"]>(
  id: ApiV1ServiceAdminDomainReadPathParams["id"],
  options: ApiV1ServiceAdminDomainRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1ServiceAdminDomainRead["response"], ApiV1ServiceAdminDomainRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1ServiceAdminDomainReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1ServiceAdminDomainRead["data"], ApiV1ServiceAdminDomainRead["error"]>({
        method: "get",
        url: `/api/v1/service/admin/domain/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **domain_not_found_by_id**Домен для замены указанным ID не обнаружен.* **replacement_domain_matches_domain_to_remove**Домен для замены совпадает с удаляемым доменом.
 * @summary Просмотр, изменение, удаление домена
 * @link /api/v1/service/admin/domain/:id/ */
export function useApiV1ServiceAdminDomainReadInfinite<
  TData = InfiniteData<ApiV1ServiceAdminDomainRead["response"]>,
  TQueryData = ApiV1ServiceAdminDomainRead["response"],
  TQueryKey extends QueryKey = ApiV1ServiceAdminDomainReadInfiniteQueryKey,
>(
  id: ApiV1ServiceAdminDomainReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1ServiceAdminDomainRead["response"], ApiV1ServiceAdminDomainRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1ServiceAdminDomainRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1ServiceAdminDomainRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1ServiceAdminDomainReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1ServiceAdminDomainRead["data"], ApiV1ServiceAdminDomainRead["error"], TData, any>({
    ...apiV1ServiceAdminDomainReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1ServiceAdminDomainRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
