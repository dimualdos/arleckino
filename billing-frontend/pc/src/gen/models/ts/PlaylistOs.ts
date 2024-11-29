import type { PlaylistType } from "./PlaylistType"

export type PlaylistOs = {
  /**
   * @type string
   */
  name: string
  /**
   * @type array | undefined
   */
  readonly playlist_types?: PlaylistType[]
}
