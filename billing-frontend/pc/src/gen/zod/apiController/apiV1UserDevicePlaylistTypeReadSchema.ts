import { z } from "zod"
import { deviceBindPlaylistTypeSchema } from "../deviceBindPlaylistTypeSchema"

export const apiV1UserDevicePlaylistTypeReadPathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDevicePlaylistTypeReadQueryResponseSchema = z.lazy(() => deviceBindPlaylistTypeSchema)
