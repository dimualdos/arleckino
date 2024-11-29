import type { EmailTemplateUpdate } from "../EmailTemplateUpdate"

export type ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this email template.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest = Omit<NonNullable<EmailTemplateUpdate>, "id">

export type ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse = EmailTemplateUpdate
export namespace ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutation {
  export type Response = ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationResponse
  export type Request = ApiV1DbTemplatesAdminEmailTemplatesPartialUpdateMutationRequest
  export type PathParams = ApiV1DbTemplatesAdminEmailTemplatesPartialUpdatePathParams
}
