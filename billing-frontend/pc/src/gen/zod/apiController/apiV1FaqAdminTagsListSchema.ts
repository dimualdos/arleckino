import { z } from "zod"
import { tagSchema } from "../tagSchema"

export const apiV1FaqAdminTagsListQueryResponseSchema = z.array(z.lazy(() => tagSchema))
