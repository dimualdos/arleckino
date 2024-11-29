export const PromocodePromocodeType = {
  amount: "amount",
  percent: "percent",
} as const
export type PromocodePromocodeType = (typeof PromocodePromocodeType)[keyof typeof PromocodePromocodeType]
export type Promocode = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  promocode_type?: PromocodePromocodeType
  /**
   * @type string
   */
  code: string
  /**
   * @type number | undefined decimal
   */
  discount?: number
  /**
   * @type integer | undefined
   */
  max_transactions?: number
  /**
   * @type string | undefined date-time
   */
  dt_create?: Date
  /**
   * @type boolean | undefined
   */
  is_active?: boolean
  /**
   * @type string | undefined date-time
   */
  dt_expire?: Date | null
  /**
   * @type string | undefined
   */
  readonly count_transactions?: string
}
