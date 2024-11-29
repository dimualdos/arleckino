export type MyPasswordReset = {
  /**
   * @type string email
   */
  email: string
  /**
   * @type string | undefined
   */
  fingerprint_token?: string | null
  /**
   * @type string | undefined
   */
  captcha_token?: string | null
}


export type MyPasswordResetResponse = {
  /**
   * @type string detail
   */
  detail: string
}
