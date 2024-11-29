import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type { ApiExternalV1PlaylistFileListQueryResponse, ApiExternalV1PlaylistFileListPathParams } from "../../../models/ts/apiExternalController/ApiExternalV1PlaylistFileList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiExternalV1PlaylistFileListClient = typeof client<ApiExternalV1PlaylistFileListQueryResponse, never, never>
type ApiExternalV1PlaylistFileList = {
  data: ApiExternalV1PlaylistFileListQueryResponse
  error: never
  request: never
  pathParams: ApiExternalV1PlaylistFileListPathParams
  queryParams: never
  headerParams: never
  response: Awaited<ReturnType<ApiExternalV1PlaylistFileListClient>>
  client: {
    parameters: Partial<Parameters<ApiExternalV1PlaylistFileListClient>[0]>
    return: Awaited<ReturnType<ApiExternalV1PlaylistFileListClient>>
  }
}
export const apiExternalV1PlaylistFileListQueryKey = (fmt: ApiExternalV1PlaylistFileListPathParams["fmt"], ottId: ApiExternalV1PlaylistFileListPathParams["ott_id"]) =>
  [{ url: "/api_external/v1/playlist/:ott_id/:fmt/file/", params: { ottId: ottId, fmt: fmt } }] as const
export type ApiExternalV1PlaylistFileListQueryKey = ReturnType<typeof apiExternalV1PlaylistFileListQueryKey>
export function apiExternalV1PlaylistFileListQueryOptions<TData = ApiExternalV1PlaylistFileList["response"], TQueryData = ApiExternalV1PlaylistFileList["response"]>(
  fmt: ApiExternalV1PlaylistFileListPathParams["fmt"],
  ottId: ApiExternalV1PlaylistFileListPathParams["ott_id"],
  options: ApiExternalV1PlaylistFileList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiExternalV1PlaylistFileList["response"], ApiExternalV1PlaylistFileList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1PlaylistFileListQueryKey(fmt, ottId)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiExternalV1PlaylistFileList["data"], ApiExternalV1PlaylistFileList["error"]>({
        method: "get",
        url: `/api_external/v1/playlist/${ottId}/${fmt}/file/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_found_by_ott_id**Устройство пользователя с указанным OttId не обнаружено.* **device_not_bind_server**Устройство пользователя с указанным OttId не связано с сервером.* **playlist_type_not_found_by_format_name**Указанный формат плейлиста не поддерживается.* **playlist_formatter_not_contain_handler_specified_format**Механизм формирования плейлиста в указанном формате еще не реализован.
 * @summary Получение файла плейлиста в указанном формате для устройства пользователя с указанным OttId
 * @link /api_external/v1/playlist/:ott_id/:fmt/file/ */
export function useApiExternalV1PlaylistFileList<
  TData = ApiExternalV1PlaylistFileList["response"],
  TQueryData = ApiExternalV1PlaylistFileList["response"],
  TQueryKey extends QueryKey = ApiExternalV1PlaylistFileListQueryKey,
>(
  fmt: ApiExternalV1PlaylistFileListPathParams["fmt"],
  ottId: ApiExternalV1PlaylistFileListPathParams["ott_id"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiExternalV1PlaylistFileList["response"], ApiExternalV1PlaylistFileList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1PlaylistFileList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiExternalV1PlaylistFileList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1PlaylistFileListQueryKey(fmt, ottId)
  const query = useQuery<ApiExternalV1PlaylistFileList["data"], ApiExternalV1PlaylistFileList["error"], TData, any>({
    ...apiExternalV1PlaylistFileListQueryOptions<TData, TQueryData>(fmt, ottId, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiExternalV1PlaylistFileList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiExternalV1PlaylistFileListInfiniteQueryKey = (fmt: ApiExternalV1PlaylistFileListPathParams["fmt"], ottId: ApiExternalV1PlaylistFileListPathParams["ott_id"]) =>
  [{ url: "/api_external/v1/playlist/:ott_id/:fmt/file/", params: { ottId: ottId, fmt: fmt } }] as const
export type ApiExternalV1PlaylistFileListInfiniteQueryKey = ReturnType<typeof apiExternalV1PlaylistFileListInfiniteQueryKey>
export function apiExternalV1PlaylistFileListInfiniteQueryOptions<TData = ApiExternalV1PlaylistFileList["response"], TQueryData = ApiExternalV1PlaylistFileList["response"]>(
  fmt: ApiExternalV1PlaylistFileListPathParams["fmt"],
  ottId: ApiExternalV1PlaylistFileListPathParams["ott_id"],
  options: ApiExternalV1PlaylistFileList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiExternalV1PlaylistFileList["response"], ApiExternalV1PlaylistFileList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiExternalV1PlaylistFileListInfiniteQueryKey(fmt, ottId)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiExternalV1PlaylistFileList["data"], ApiExternalV1PlaylistFileList["error"]>({
        method: "get",
        url: `/api_external/v1/playlist/${ottId}/${fmt}/file/`,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **device_not_found_by_ott_id**Устройство пользователя с указанным OttId не обнаружено.* **device_not_bind_server**Устройство пользователя с указанным OttId не связано с сервером.* **playlist_type_not_found_by_format_name**Указанный формат плейлиста не поддерживается.* **playlist_formatter_not_contain_handler_specified_format**Механизм формирования плейлиста в указанном формате еще не реализован.
 * @summary Получение файла плейлиста в указанном формате для устройства пользователя с указанным OttId
 * @link /api_external/v1/playlist/:ott_id/:fmt/file/ */
export function useApiExternalV1PlaylistFileListInfinite<
  TData = InfiniteData<ApiExternalV1PlaylistFileList["response"]>,
  TQueryData = ApiExternalV1PlaylistFileList["response"],
  TQueryKey extends QueryKey = ApiExternalV1PlaylistFileListInfiniteQueryKey,
>(
  fmt: ApiExternalV1PlaylistFileListPathParams["fmt"],
  ottId: ApiExternalV1PlaylistFileListPathParams["ott_id"],
  options: {
    query?: Partial<UseInfiniteQueryOptions<ApiExternalV1PlaylistFileList["response"], ApiExternalV1PlaylistFileList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiExternalV1PlaylistFileList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiExternalV1PlaylistFileList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiExternalV1PlaylistFileListInfiniteQueryKey(fmt, ottId)
  const query = useInfiniteQuery<ApiExternalV1PlaylistFileList["data"], ApiExternalV1PlaylistFileList["error"], TData, any>({
    ...apiExternalV1PlaylistFileListInfiniteQueryOptions<TData, TQueryData>(fmt, ottId, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiExternalV1PlaylistFileList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
