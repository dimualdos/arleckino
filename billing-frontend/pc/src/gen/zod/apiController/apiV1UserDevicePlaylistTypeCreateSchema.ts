import { z } from "zod"
import { deviceBindPlaylistTypeSchema } from "../deviceBindPlaylistTypeSchema"

export const apiV1UserDevicePlaylistTypeCreatePathParamsSchema = z.object({ id: z.string() })
export const apiV1UserDevicePlaylistTypeCreate201Schema = z.lazy(() => deviceBindPlaylistTypeSchema)
export const apiV1UserDevicePlaylistTypeCreateMutationRequestSchema = z.lazy(() => deviceBindPlaylistTypeSchema)
export const apiV1UserDevicePlaylistTypeCreateMutationResponseSchema = z.lazy(() => deviceBindPlaylistTypeSchema)
