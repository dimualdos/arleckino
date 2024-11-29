import { z } from "zod"
import { tagSchema } from "../tagSchema"

export const apiV1FaqTagsListQueryResponseSchema = z.array(z.lazy(() => tagSchema))
