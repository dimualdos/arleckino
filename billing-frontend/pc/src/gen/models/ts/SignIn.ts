export type SignIn = {
  /**
   * @type string email
   */
  username: string
  /**
   * @type string
   */
  password: string
  /**
   * @type string | undefined
   */
  fingerprint_token?: string | null
  /**
   * @type string | undefined
   */
  captcha_token?: string | null
}


export type SignInResponse = {
    /**
   * @type string token
   */
    token: string
    /**
     * @type string
     */
    token_expired: string
    /**
     * @type string | undefined
     */
    frontend_language?: string
}
