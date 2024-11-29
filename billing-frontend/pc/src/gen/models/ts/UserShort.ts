export type UserShort = {
  /**
   * @type integer | undefined
   */
  readonly id?: number
  /**
   * @type string | undefined
   */
  first_name?: string
  /**
   * @type string | undefined
   */
  last_name?: string
  /**
   * @type string | undefined email
   */
  email?: string
  /**
   * @description Отметьте, если пользователь должен считаться активным. Уберите эту отметку вместо удаления учётной записи.
   * @type boolean | undefined
   */
  is_active?: boolean
}
