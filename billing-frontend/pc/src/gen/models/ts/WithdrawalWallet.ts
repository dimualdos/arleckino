import type { WithdrawalSystemShort } from "./WithdrawalSystemShort"
import type { UserShort } from "./UserShort"

export const WithdrawalWalletCurrency = {
  rub: "rub",
  eur: "eur",
  usd: "usd",
} as const
export type WithdrawalWalletCurrency = (typeof WithdrawalWalletCurrency)[keyof typeof WithdrawalWalletCurrency]
export type WithdrawalWallet = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  withdrawal_system?: WithdrawalSystemShort
  user?: UserShort
  /**
   * @type string | undefined
   */
  currency?: WithdrawalWalletCurrency
  /**
   * @type string
   */
  withdrawal_system_user_identifier: string
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type string | undefined date-time
   */
  dt_update?: Date
  /**
   * @type boolean | undefined
   */
  is_hidden?: boolean
  /**
   * @type boolean | undefined
   */
  is_verified?: boolean
  /**
   * @type string | undefined date-time
   */
  dt_verified?: Date | null
}
