export const PromocodeCreatePromocodeType = {
  amount: "amount",
  percent: "percent",
} as const
export type PromocodeCreatePromocodeType = (typeof PromocodeCreatePromocodeType)[keyof typeof PromocodeCreatePromocodeType]
export type PromocodeCreate = {
  /**
   * @type string | undefined
   */
  promocode_type?: PromocodeCreatePromocodeType
  /**
   * @type string
   */
  code: string
  /**
   * @type number | undefined decimal
   */
  discount?: number
  /**
   * @type integer
   */
  max_transactions: number
  /**
   * @type string | undefined date-time
   */
  dt_expire?: Date | null
}
