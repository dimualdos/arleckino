export interface GroupItemProp {
  id: string
  name: string
  selected: boolean
  count: number | string
  imageUrl?: string
}

export type GridCountProps = 1 | 2 | 3