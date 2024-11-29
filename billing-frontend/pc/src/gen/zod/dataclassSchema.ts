import { z } from "zod"

export const dataclassSchema = z.object({ file_id: z.number(), file_name: z.string().min(1), file_size: z.number(), mime_type: z.string().min(1), url: z.string().min(1) })
