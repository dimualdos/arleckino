import React, { FC, HTMLAttributes } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import Item from "./Item"

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  withOpacity?: boolean
  isDragging?: boolean
}

const SortableItem: FC<ItemProps> = (props) => {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  return (
    <Item
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

export default SortableItem
