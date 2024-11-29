import { z } from "zod"

export const playlistGroupChannelMoveSchema = z.object({ group: z.number() })
