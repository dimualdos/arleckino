import type { EmailTemplateContentImage } from "../EmailTemplateContentImage"

export type ApiV1DbTemplatesAdminEmailTemplatesImagesCreate201 = EmailTemplateContentImage

export type ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest = Omit<NonNullable<EmailTemplateContentImage>, "id" | "image">

export type ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse = EmailTemplateContentImage
export namespace ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutation {
  export type Response = ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationResponse
  export type Request = ApiV1DbTemplatesAdminEmailTemplatesImagesCreateMutationRequest
  export type Errors = ApiV1DbTemplatesAdminEmailTemplatesImagesCreate201
}
