import type { TemplateContentImage } from "../TemplateContentImage"

export type ApiV1DbTemplatesAdminTemplatesImagesCreate201 = TemplateContentImage

export type ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest = Omit<NonNullable<TemplateContentImage>, "id" | "image">

export type ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse = TemplateContentImage
export namespace ApiV1DbTemplatesAdminTemplatesImagesCreateMutation {
  export type Response = ApiV1DbTemplatesAdminTemplatesImagesCreateMutationResponse
  export type Request = ApiV1DbTemplatesAdminTemplatesImagesCreateMutationRequest
  export type Errors = ApiV1DbTemplatesAdminTemplatesImagesCreate201
}
