import React, { useLayoutEffect } from "react"
import { TripleCheckbox } from "./triple-checkbox"
import clsx from "clsx"
import { Button } from "./button"
import { CSS } from "@dnd-kit/utilities"
import { Edit2, GripVertical, TrashIcon } from "lucide-react"
import { useSortable } from "@dnd-kit/sortable"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { GroupItemProp } from "@/src/widgets/Personal/UpdateChannels/types"
import { useDroppable } from "@dnd-kit/core"

type Props = {
  item: GroupItemProp
  isDragging?: boolean
  handleToggleGroupToRename?: (val: GroupItemProp, open: boolean) => void
  handleToggleGroupToDelete?: (val: GroupItemProp, open: boolean) => void
}

export const ChannelCard = ({ item, isDragging = false, handleToggleGroupToRename, handleToggleGroupToDelete }: Props) => {
  const { id, name, count, selected } = item
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const { isOver, setNodeRef: setNodeRefDropable } = useDroppable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 10,
  }
  const styleDropable = {
    opacity: isOver ? 1 : 0.5,
  }
  

  const onRenameHandler = () => {
    if (handleToggleGroupToRename) handleToggleGroupToRename(item, true)
  }

  const onDeleteHandler = () => {
    if (handleToggleGroupToDelete) handleToggleGroupToDelete(item, true)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            ref={setNodeRef}
            style={style}
            className={clsx("group relative flex items-center rounded-sm border border-white px-2 py-2.5 selection:bg-transparent lg:rounded-none lg:border-t lg:border-t-grey-soft", {
              "bg-blue-soft lg:bg-white": !selected,
              "bg-white": selected,
              "shadow-lg": isDragging,
              "lg:rounded-sm": isDragging,
            })}
          >
            <TripleCheckbox selected={selected ? "all-selected" : "none"} />
            <span
              ref={setNodeRefDropable}
              style={styleDropable}
              className={clsx("ml-2 max-w-[75%] truncate lg:max-w-[95%]", {
                "text-grey-hard": !selected,
              })}
            >
              {name}
            </span>
            <span className="ml-2 text-grey-hard">{count}</span>
            <div className="pointer-events-none absolute right-0 top-0 z-10 inline-flex h-full items-center space-x-2 bg-white px-2 opacity-0 transition-all duration-300 focus-within:pointer-events-auto focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 lg:pointer-events-auto lg:static lg:ml-auto lg:opacity-100">
              <Button
                onClick={onRenameHandler}
                className="p-1"
                variant={"transparent"}
                size={"none"}
              >
                <Edit2 className="size-4 text-accent lg:stroke-black" />
              </Button>
              <Button
                onClick={onDeleteHandler}
                className="p-1 lg:hidden"
                variant={"transparent"}
                size={"none"}
              >
                <TrashIcon className="size-4 text-accent" />
              </Button>
              <Button
                {...listeners}
                {...attributes}
                className="cursor-grab p-1"
                variant={"transparent"}
                size={"none"}
              >
                <GripVertical className="size-4 text-grey" />
              </Button>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent
          className={clsx({
            "opacity-0": isDragging,
          })}
          side="top"
          sideOffset={10}
        >
          {/* TODO: Past here a data */}
          <p>Мои любимые спортивные каналы </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
