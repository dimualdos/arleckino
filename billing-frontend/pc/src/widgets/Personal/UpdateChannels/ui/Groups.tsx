import { Button } from "@/src/shared/ui/button"
import { ChannelCard } from "@/src/shared/ui/channel-card"
import { TripleCheckbox } from "@/src/shared/ui/triple-checkbox"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import React from "react"
import { GroupItemProp } from "../types"
import { DragOverlay } from "@dnd-kit/core"

type Props = {
  activeItem: GroupItemProp | null | undefined
  items: GroupItemProp[]
  onOpenNewGroup: () => void
  onOpenRename?: () => void
  handleToggleGroupToRename?: (val: GroupItemProp, open: boolean) => void
  handleToggleGroupToDelete?: (val: GroupItemProp, open: boolean) => void
}

export const Groups = ({ onOpenNewGroup, items, activeItem, onOpenRename, handleToggleGroupToRename, handleToggleGroupToDelete }: Props) => {
  return (
    <div>
      <p className="text-xl font-semibold lg:px-2">Список групп</p>
      <div className="mt-4 space-y-2">
        {/* HEAD START */}
        <div className="flex items-center pl-2 lg:pr-2">
          <div className="flex items-center space-x-2">
            <TripleCheckbox selected="some-selected" />
            <span>Все группы</span>
          </div>
          <Button
            onClick={onOpenNewGroup}
            className="ml-auto text-accent"
            variant={"transparent"}
            size={"none"}
          >
            + Новая группа
          </Button>
        </div>
        {/* HEAD END */}

        {/* ITEMS START */}
        <div className="custom-scrollbar flex max-h-[430px] flex-col space-y-1 overflow-auto pb-1 pr-3 lg:max-h-none lg:space-y-0 lg:pr-0">
          <SortableContext
            strategy={verticalListSortingStrategy}
            items={items}
          >
            {items.map((item) => {
              return (
                <ChannelCard
                  key={item.id}
                  item={item}
                  handleToggleGroupToRename={handleToggleGroupToRename}
                  handleToggleGroupToDelete={handleToggleGroupToDelete}
                />
              )
            })}
          </SortableContext>

          <DragOverlay style={{ transformOrigin: "0 0 " }}>
            {activeItem ? (
              <ChannelCard
                item={activeItem}
                isDragging
              />
            ) : null}
          </DragOverlay>
        </div>
        {/* ITEMS END */}
      </div>
    </div>
  )
}
