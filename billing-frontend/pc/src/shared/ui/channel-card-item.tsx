import React from "react"
import { TripleCheckbox } from "./triple-checkbox"
import clsx from "clsx"
import { Button } from "./button"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"
import { useSortable } from "@dnd-kit/sortable"
import { GroupItemProp } from "@/src/widgets/Personal/UpdateChannels/types"

type Props = {
  item: GroupItemProp
  type?: "small" | "large" // Вид отображения | Type of design
  isDragging?: boolean
}

export const ChannelCardItem = ({ item, type, isDragging }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: !isDragging ? 1 : 10,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx("group relative flex items-center rounded-sm border border-white bg-white px-2 py-2.5", {
        "shadow-lg": isDragging,
        "flex-col items-start": type === "large",
      })}
    >
      <div
        className={clsx("flex items-center justify-between", {
          "w-full": type === "large",
        })}
      >
        <TripleCheckbox selected={item.selected ? "all-selected" : "none"} />
        <Button
          {...listeners}
          {...attributes}
          className={clsx("ml-auto cursor-grab p-1", {
            hidden: type !== "large",
            flex: type === "large",
          })}
          variant={"transparent"}
          size={"none"}
        >
          <GripVertical className="size-4 text-grey" />
        </Button>
      </div>

      <div
        className={clsx("relative mt-2 w-full overflow-hidden rounded-sm pb-[40%]", {
          hidden: type !== "large",
          block: type === "large",
        })}
      >
        <div className="absolute inset-0 h-full w-full bg-black"></div>
      </div>

      <span
        className={clsx("ml-2 max-w-[75%] truncate lg:max-w-[95%]", {
          "text-grey-hard": !item.selected,
          "ml-0 mt-2 self-start text-black": type === "large",
        })}
      >
        <span>{item.name}</span>
      </span>

      <Button
        {...listeners}
        {...attributes}
        className={clsx("ml-auto cursor-grab p-1", {
          hidden: type === "large",
        })}
        variant={"transparent"}
        size={"none"}
      >
        <GripVertical className="size-4 text-grey" />
      </Button>
    </div>
  )
}
