import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1PlaylistReadQueryResponse, ApiExternalV1PlaylistReadPathParams } from "../../../models/ts/apiExternalController/ApiExternalV1PlaylistRead"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1PlaylistReadClient = typeof client<ApiExternalV1PlaylistReadQueryResponse, never, never>
type ApiExternalV1PlaylistRead = {
  data: ApiExternalV1PlaylistReadQueryResponse
  error: never
  request: never
  pathParams: ApiExternalV1PlaylistReadPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1PlaylistReadClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1PlaylistReadClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1PlaylistReadClient>>
  }
}
export const apiExternalV1PlaylistReadQueryKey = (fmt: ApiExternalV1PlaylistReadPathParams["fmt"], ottId: ApiExternalV1PlaylistReadPathParams["ott_id"]) =>
  [{ url: "/api_external/v1/playlist/:ott_id/:fmt/", params: { ottId: ottId, fmt: fmt } }] as const
export type ApiExternalV1PlaylistReadQueryKey = ReturnType<typeof apiExternalV1PlaylistReadQueryKey>
export function apiExternalV1PlaylistReadQueryOptions<TData = ApiExternalV1PlaylistRead["response"], TQueryData = ApiExternalV1PlaylistRead["response"]>(
  fmt: ApiExternalV1PlaylistReadPathParams["fmt"],
  ottId: ApiExternalV1PlaylistReadPathParams["ott_id"],
  options: ApiExternalV1PlaylistRead["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1PlaylistRead["response"], ApiExternalV1PlaylistRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1PlaylistReadQueryKey(fmt, ottId)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1PlaylistRead["data"], ApiExternalV1PlaylistRead["error"]>({
        method: "get",
        url: `/api_external/v1/playlist/${ottId}/${fmt}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_found_by_ott_id**Устройство пользователя с указанным OttId не обнаружено.* **device_not_bind_server**Устройство пользователя с указанным OttId не связано с сервером.* **playlist_type_not_found_by_format_name**Указанный формат плейлиста не поддерживается.* **playlist_formatter_not_contain_handler_specified_format**Механизм формирования плейлиста в указанном формате еще не реализован.
 * @summary Получение плейлиста в указанном формате для устройства пользователя с указанным OttId
 * @link /api_external/v1/playlist/:ott_id/:fmt/ */
export function useApiExternalV1PlaylistRead<
  TData = ApiExternalV1PlaylistRead["response"],
  TQueryData = ApiExternalV1PlaylistRead["response"],
  TQueryKey extends QueryKey = ApiExternalV1PlaylistReadQueryKey,
>(
  fmt: ApiExternalV1PlaylistReadPathParams["fmt"],
  ottId: ApiExternalV1PlaylistReadPathParams["ott_id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1PlaylistRead["response"], ApiExternalV1PlaylistRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1PlaylistRead["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1PlaylistRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1PlaylistReadQueryKey(fmt, ottId)
  const query = useQuery<ApiExternalV1PlaylistRead["data"], ApiExternalV1PlaylistRead["error"], TData, any>({
    ...apiExternalV1PlaylistReadQueryOptions<TData, TQueryData>(fmt, ottId, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1PlaylistRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1PlaylistReadInfiniteQueryKey = (fmt: ApiExternalV1PlaylistReadPathParams["fmt"], ottId: ApiExternalV1PlaylistReadPathParams["ott_id"]) =>
  [{ url: "/api_external/v1/playlist/:ott_id/:fmt/", params: { ottId: ottId, fmt: fmt } }] as const
export type ApiExternalV1PlaylistReadInfiniteQueryKey = ReturnType<typeof apiExternalV1PlaylistReadInfiniteQueryKey>
export function apiExternalV1PlaylistReadInfiniteQueryOptions<TData = ApiExternalV1PlaylistRead["response"], TQueryData = ApiExternalV1PlaylistRead["response"]>(
  fmt: ApiExternalV1PlaylistReadPathParams["fmt"],
  ottId: ApiExternalV1PlaylistReadPathParams["ott_id"],
  options: ApiExternalV1PlaylistRead["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1PlaylistRead["response"], ApiExternalV1PlaylistRead["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1PlaylistReadInfiniteQueryKey(fmt, ottId)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1PlaylistRead["data"], ApiExternalV1PlaylistRead["error"]>({
        method: "get",
        url: `/api_external/v1/playlist/${ottId}/${fmt}/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_found_by_ott_id**Устройство пользователя с указанным OttId не обнаружено.* **device_not_bind_server**Устройство пользователя с указанным OttId не связано с сервером.* **playlist_type_not_found_by_format_name**Указанный формат плейлиста не поддерживается.* **playlist_formatter_not_contain_handler_specified_format**Механизм формирования плейлиста в указанном формате еще не реализован.
 * @summary Получение плейлиста в указанном формате для устройства пользователя с указанным OttId
 * @link /api_external/v1/playlist/:ott_id/:fmt/ */
export function useApiExternalV1PlaylistReadInfinite<
  TData = InfiniteData<ApiExternalV1PlaylistRead["response"]>,
  TQueryData = ApiExternalV1PlaylistRead["response"],
  TQueryKey extends QueryKey = ApiExternalV1PlaylistReadInfiniteQueryKey,
>(
  fmt: ApiExternalV1PlaylistReadPathParams["fmt"],
  ottId: ApiExternalV1PlaylistReadPathParams["ott_id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1PlaylistRead["response"], ApiExternalV1PlaylistRead["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1PlaylistRead["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1PlaylistRead["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1PlaylistReadInfiniteQueryKey(fmt, ottId)
  const query = useInfiniteQuery<ApiExternalV1PlaylistRead["data"], ApiExternalV1PlaylistRead["error"], TData, any>({
    ...apiExternalV1PlaylistReadInfiniteQueryOptions<TData, TQueryData>(fmt, ottId, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1PlaylistRead["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
