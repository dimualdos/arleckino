import client from "@/src/axios-client"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import type {
  ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponse,
  ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryParams,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceWithdrawalTransactionsList"
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired, UseInfiniteQueryOptions, UseInfiniteQueryResult, InfiniteData } from "@tanstack/react-query"

type ApiV1UserReferralsBalanceWithdrawalTransactionsListClient = typeof client<ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponse, never, never>
type ApiV1UserReferralsBalanceWithdrawalTransactionsList = {
  data: ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryResponse
  error: never
  request: never
  pathParams: never
  queryParams: ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryParams
  headerParams: never
  response: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsListClient>>
  client: {
    parameters: Partial<Parameters<ApiV1UserReferralsBalanceWithdrawalTransactionsListClient>[0]>
    return: Awaited<ReturnType<ApiV1UserReferralsBalanceWithdrawalTransactionsListClient>>
  }
}
export const apiV1UserReferralsBalanceWithdrawalTransactionsListQueryKey = (params?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/balance/withdrawal-transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryKey = ReturnType<typeof apiV1UserReferralsBalanceWithdrawalTransactionsListQueryKey>
export function apiV1UserReferralsBalanceWithdrawalTransactionsListQueryOptions<
  TData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
>(
  params?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: ApiV1UserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"] = {},
): WithRequired<UseBaseQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsBalanceWithdrawalTransactionsListQueryKey(params)
  return {
    queryKey,
    queryFn: async () => {
      const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions`,
        params,
        ...options,
      })
      return res
    },
  }
}
/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **amount_must_be_positive**Сумма должна быть больше нуля.* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_not_found_by_id**Кошелек для вывода средств с указанным ID не обнаружен.* **withdrawal_system_is_disabled**Система для вывода средств с указанным ID отключена.* **withdrawal_wallet_with_different_withdrawal_system**Указан кошелек для вывода средств для другой системы вывода средств.
 * @summary Список транзакций вывода средств, создание новой транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsList<
  TData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsBalanceWithdrawalTransactionsListQueryKey,
>(
  params?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: {
    query?: Partial<UseBaseQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData, TQueryKey>>
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"]
  } = {},
): UseQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsBalanceWithdrawalTransactionsListQueryKey(params)
  const query = useQuery<ApiV1UserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"], TData, any>({
    ...apiV1UserReferralsBalanceWithdrawalTransactionsListQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
export const apiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey = (params?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["queryParams"]) =>
  [{ url: "/api/v1/user/referrals/balance/withdrawal-transactions" }, ...(params ? [params] : [])] as const
export type ApiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey = ReturnType<typeof apiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey>
export function apiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryOptions<
  TData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
>(
  params?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: ApiV1UserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"] = {},
): WithRequired<UseInfiniteQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData>, "queryKey"> {
  const queryKey = apiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey(params)
  return {
    queryKey,
    queryFn: async ({ pageParam }) => {
      const res = await client<ApiV1UserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"]>({
        method: "get",
        url: `/api/v1/user/referrals/balance/withdrawal-transactions`,
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
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **amount_must_be_positive**Сумма должна быть больше нуля.* **withdrawal_system_not_found_by_id**Система для вывода средств с указанным ID не обнаружена.* **withdrawal_wallet_not_found_by_id**Кошелек для вывода средств с указанным ID не обнаружен.* **withdrawal_system_is_disabled**Система для вывода средств с указанным ID отключена.* **withdrawal_wallet_with_different_withdrawal_system**Указан кошелек для вывода средств для другой системы вывода средств.
 * @summary Список транзакций вывода средств, создание новой транзакции вывода средств
 * @link /api/v1/user/referrals/balance/withdrawal-transactions */
export function useApiV1UserReferralsBalanceWithdrawalTransactionsListInfinite<
  TData = InfiniteData<ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"]>,
  TQueryData = ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"],
  TQueryKey extends QueryKey = ApiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey,
>(
  params?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["queryParams"],
  options: {
    query?: Partial<
      UseInfiniteQueryOptions<ApiV1UserReferralsBalanceWithdrawalTransactionsList["response"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"], TData, TQueryData, TQueryKey>
    >
    client?: ApiV1UserReferralsBalanceWithdrawalTransactionsList["client"]["parameters"]
  } = {},
): UseInfiniteQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"]> & {
  queryKey: TQueryKey
} {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? apiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryKey(params)
  const query = useInfiniteQuery<ApiV1UserReferralsBalanceWithdrawalTransactionsList["data"], ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"], TData, any>({
    ...apiV1UserReferralsBalanceWithdrawalTransactionsListInfiniteQueryOptions<TData, TQueryData>(params, clientOptions),
    queryKey,
    ...queryOptions,
  }) as UseInfiniteQueryResult<TData, ApiV1UserReferralsBalanceWithdrawalTransactionsList["error"]> & {
    queryKey: TQueryKey
  }
  query.queryKey = queryKey as TQueryKey
  return query
}
