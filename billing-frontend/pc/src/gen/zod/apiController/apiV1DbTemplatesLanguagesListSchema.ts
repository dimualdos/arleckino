import { z } from "zod"
import { languageSchema } from "../languageSchema"

export const apiV1DbTemplatesLanguagesListQueryResponseSchema = z.array(z.lazy(() => languageSchema))
