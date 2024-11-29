import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiV1IptvAdminChannelGroupReadQueryResponse, ApiV1IptvAdminChannelGroupReadPathParams } from "../../../models/ts/apiController/ApiV1IptvAdminChannelGroupRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1IptvAdminChannelGroupReadClient = typeof client<ApiV1IptvAdminChannelGroupReadQueryResponse, never, never>
type ApiV1IptvAdminChannelGroupRead = {
  data: ApiV1IptvAdminChannelGroupReadQueryResponse
  error: never
  request: never
  pathParams: ApiV1IptvAdminChannelGroupReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiV1IptvAdminChannelGroupReadClient>>
  client: {
    parameters: Partial<Parameters<ApiV1IptvAdminChannelGroupReadClient>[0]>
    return: Awaited<ReturnType<ApiV1IptvAdminChannelGroupReadClient>>
  }
}
export const apiV1IptvAdminChannelGroupReadQueryKey = (id: ApiV1IptvAdminChannelGroupReadPathParams["id"]) => [{ url: "/api/v1/iptv/admin/channel-group/:id/", params: { id: id } }] as const
export type ApiV1IptvAdminChannelGroupReadQueryKey = ReturnType<typeof apiV1IptvAdminChannelGroupReadQueryKey>
export function apiV1IptvAdminChannelGroupReadQueryOptions<TData = ApiV1IptvAdminChannelGroupRead["response"], TQueryData = ApiV1IptvAdminChannelGroupRead["response"]>(
  id: ApiV1IptvAdminChannelGroupReadPathParams["id"],
  options: ApiV1IptvAdminChannelGroupRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1IptvAdminChannelGroupRead["response"], ApiV1IptvAdminChannelGroupRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelGroupReadQueryKey(id)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1IptvAdminChannelGroupRead["data"], ApiV1IptvAdminChannelGroupRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel-group/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export function useApiV1IptvAdminChannelGroupRead<
  TData = ApiV1IptvAdminChannelGroupRead["response"],
  TQueryData = ApiV1IptvAdminChannelGroupRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelGroupReadQueryKey,
>(
  id: ApiV1IptvAdminChannelGroupReadPathParams["id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1IptvAdminChannelGroupRead["response"], ApiV1IptvAdminChannelGroupRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelGroupRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1IptvAdminChannelGroupRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelGroupReadQueryKey(id)
  const query = useQuery<ApiV1IptvAdminChannelGroupRead["data"], ApiV1IptvAdminChannelGroupRead["error"], TData, any>({
    ...apiV1IptvAdminChannelGroupReadQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1IptvAdminChannelGroupRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1IptvAdminChannelGroupReadInfiniteQueryKey = (id: ApiV1IptvAdminChannelGroupReadPathParams["id"]) => [{ url: "/api/v1/iptv/admin/channel-group/:id/", params: { id: id } }] as const
export type ApiV1IptvAdminChannelGroupReadInfiniteQueryKey = ReturnType<typeof apiV1IptvAdminChannelGroupReadInfiniteQueryKey>
export function apiV1IptvAdminChannelGroupReadInfiniteQueryOptions<TData = ApiV1IptvAdminChannelGroupRead["response"], TQueryData = ApiV1IptvAdminChannelGroupRead["response"]>(
  id: ApiV1IptvAdminChannelGroupReadPathParams["id"],
  options: ApiV1IptvAdminChannelGroupRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1IptvAdminChannelGroupRead["response"], ApiV1IptvAdminChannelGroupRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1IptvAdminChannelGroupReadInfiniteQueryKey(id)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1IptvAdminChannelGroupRead["data"], ApiV1IptvAdminChannelGroupRead["error"]>({
        method: "get",
        url: `/api/v1/iptv/admin/channel-group/${id}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **remove_group_with_related_channels_is_impossible**Удалить группу со связанными каналами невозможно.
 * @summary Просмотр/Изменение/Удаление группы каналов
 * @link /api/v1/iptv/admin/channel-group/:id/ */
export function useApiV1IptvAdminChannelGroupReadInfinite<
  TData = InfiniteData<ApiV1IptvAdminChannelGroupRead["response"]>,
  TQueryData = ApiV1IptvAdminChannelGroupRead["response"],
  TQueryKey extends QueryKey = ApiV1IptvAdminChannelGroupReadInfiniteQueryKey,
>(
  id: ApiV1IptvAdminChannelGroupReadPathParams["id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiV1IptvAdminChannelGroupRead["response"], ApiV1IptvAdminChannelGroupRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1IptvAdminChannelGroupRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelGroupRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1IptvAdminChannelGroupReadInfiniteQueryKey(id)
  const query = useInfiniteQuery<ApiV1IptvAdminChannelGroupRead["data"], ApiV1IptvAdminChannelGroupRead["error"], TData, any>({
    ...apiV1IptvAdminChannelGroupReadInfiniteQueryOptions<TData, TQueryData>(id, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1IptvAdminChannelGroupRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
