import { z } from "zod"
import { playlistBindDeviceSchema } from "../playlistBindDeviceSchema"

export const apiV1IptvPlaylistBindDeviceCreatePathParamsSchema = z.object({ device_pk: z.string(), id: z.string() })
export const apiV1IptvPlaylistBindDeviceCreate201Schema = z.lazy(() => playlistBindDeviceSchema)
export const apiV1IptvPlaylistBindDeviceCreateMutationRequestSchema = z.lazy(() => playlistBindDeviceSchema).schema.and(z.object({ devices: z.never() }))
export const apiV1IptvPlaylistBindDeviceCreateMutationResponseSchema = z.lazy(() => playlistBindDeviceSchema)
