import client from "@/src/axios-client"
import type { ResponseConfig } from "@/src/axios-client"
import type {
  ApiV1UserReferralsBalanceTransferCreateMutationRequest,
  ApiV1UserReferralsBalanceTransferCreateMutationResponse,
} from "../../../models/ts/apiController/ApiV1UserReferralsBalanceTransferCreate"

/**
 * @description Список сообщений **message_type**:* **not_enough_money**Недостаточно средств на балансе реферального счета.* **amount_must_be_positive**Сумма должна быть больше нуля.
 * @summary Перевод реферального дохода на текущий баланс пользователя
 * @link /api/v1/user/referrals/balance-transfer */
export async function apiV1UserReferralsBalanceTransferCreate(
  data: ApiV1UserReferralsBalanceTransferCreateMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<ApiV1UserReferralsBalanceTransferCreateMutationResponse>> {
  const res = await client<ApiV1UserReferralsBalanceTransferCreateMutationResponse, ApiV1UserReferralsBalanceTransferCreateMutationRequest>({
    method: "post",
    url: `/api/v1/user/referrals/balance-transfer`,
    data,
    ...options,
  })
  return res
}
