import { z } from "zod"

export const apiV1FaqAdminTagsDelete204Schema = z.any()
export const apiV1FaqAdminTagsDeleteMutationResponseSchema = z.any()
export const apiV1FaqAdminTagsDeletePathParamsSchema = z.object({ id: z.number().describe(`A unique integer value identifying this tag.`) })
