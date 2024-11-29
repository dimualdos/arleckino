import { Button } from "@/src/shared/ui/button"
import { ChannelCardItem } from "@/src/shared/ui/channel-card-item"
import { Input } from "@/src/shared/ui/input"
import clsx from "clsx"
import { ChevronLeft, ChevronRight, Grid3X3, LucideMoreVertical, Rows4, Search } from "lucide-react"
import React from "react"
import { GridCountProps, GroupItemProp } from "../types"
import { SortableContext } from "@dnd-kit/sortable"
import { DragOverlay } from "@dnd-kit/core"
import { TripleCheckbox } from "@/src/shared/ui/triple-checkbox"

type Props = {
  gridCount: GridCountProps
  activeItem: GroupItemProp | null | undefined
  items: GroupItemProp[]
  handleSetGridCount: (val: GridCountProps) => () => void
  isActiveSidebar: boolean
  onChangeActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>
  toggleActiveSidebar: () => void
}

export const Content = ({ activeItem, items, gridCount, handleSetGridCount, isActiveSidebar, onChangeActiveSidebar, toggleActiveSidebar }: Props) => {
  return (
    <>
      {/* HEAD MOBILE START */}
      <div className="mt-4 hidden rounded-lg bg-white lg:block">
        <div className="container space-y-6 py-6">
          <div className="flex items-center">
            <p className="mr-2 text-xl font-semibold">
              RU Детские <span className="text-grey-hard">0/33</span>
            </p>
            <Button
              variant={"outline"}
              size={"icon"}
              className="mb-auto ml-auto bg-white"
            >
              <LucideMoreVertical className="size-5 text-black" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Input
              className="flex-1"
              placeholder="Поиск каналов"
            />
            <Button size={"icon"}>
              <Search className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* HEAD MOBILE END */}

      <Button
        onClick={toggleActiveSidebar}
        variant={!isActiveSidebar ? "accent" : "white"}
        className={clsx("absolute -left-3.5 top-8 rounded-full p-0 lg:hidden", {
          "bg-blue-soft": isActiveSidebar,
        })}
        size="xs"
      >
        {!isActiveSidebar ? <ChevronRight className="text size-4" /> : <ChevronLeft className="text size-4" />}
      </Button>

      <div className="lg:p-4">
        {/* HEAD DESKTOP START */}
        <div className="flex items-center lg:hidden">
          <p className="mr-3 text-xl font-semibold">
            RU Детские <span className="text-grey-hard">0/33</span>
          </p>
          <div className="ml-auto flex items-center space-x-8">
            <div className="inline-flex items-center space-x-2.5">
              <Button
                variant={"transparent"}
                className="p-1"
                onClick={handleSetGridCount(1)}
                size="none"
              >
                <Rows4
                  className={clsx("size-5 transition-all duration-300", {
                    "text-grey": gridCount > 1,
                    "text-black": gridCount === 1,
                  })}
                />
              </Button>
              <Button
                variant={"transparent"}
                className="p-1"
                onClick={handleSetGridCount(3)}
                size="none"
              >
                <Grid3X3
                  className={clsx("size-5 transition-all duration-300", {
                    "text-grey": gridCount < 3,
                    "text-black": gridCount === 3,
                  })}
                />
              </Button>
            </div>
            <div className="relative w-72">
              <Input placeholder="Поиск каналов" />
              <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-grey" />
            </div>
          </div>
        </div>
        {/* HEAD DESKTOP END */}

        {/* HEAD MOBILE START */}
        <div className="hidden items-center justify-between pl-2 lg:flex">
          <div className="flex items-center space-x-2">
            <TripleCheckbox selected="some-selected" />
            <span>Все каналы</span>
          </div>
          <div className="inline-flex items-center space-x-2.5">
            <Button
              variant={"transparent"}
              className="p-1"
              onClick={handleSetGridCount(1)}
              size="none"
            >
              <Rows4
                className={clsx("size-5 transition-all duration-300", {
                  "text-grey": gridCount !== 1,
                  "text-purple": gridCount === 1,
                })}
              />
            </Button>
            <Button
              variant={"transparent"}
              className="p-1"
              onClick={handleSetGridCount(2)}
              size="none"
            >
              <Grid3X3
                className={clsx("size-5 transition-all duration-300", {
                  "text-grey": gridCount === 1,
                  "text-purple": gridCount > 1,
                })}
              />
            </Button>
          </div>
        </div>
        {/* HEAD MOBILE END */}

        {/* SUBHEAD */}
        <div className="mt-4 flex items-center space-x-6 lg:hidden">
          <Button
            size={"none"}
            className="text-accent"
            variant={"transparent"}
          >
            Отображать все
          </Button>
          <Button
            size={"none"}
            className="text-accent"
            variant={"transparent"}
          >
            Скрыть все
          </Button>
        </div>

        {/* ITEMS */}
        <div className="overflow-visible lg:mt-4.5">
          <SortableContext items={items}>
            <div className={clsx("custom-scrollbar mt-4 grid max-h-[430px] grid-cols-3 gap-x-3 gap-y-2 overflow-auto pb-1 pr-2 lg:mt-0 lg:max-h-none lg:grid-cols-2 lg:pr-0", {
              "sm:grid-cols-1": gridCount <= 2
            })}>
              {items.map((item, indx) => {
                return (
                  <ChannelCardItem
                    type={gridCount > 1 ? "large" : "small"}
                    key={indx}
                    item={item}
                  />
                )
              })}
            </div>
          </SortableContext>

          <DragOverlay
            adjustScale
            style={{ transformOrigin: "0 0 " }}
          >
            {activeItem ? (
              <ChannelCardItem
                type={gridCount > 1 ? "large" : "small"}
                item={activeItem}
                isDragging
              />
            ) : null}
          </DragOverlay>
        </div>
      </div>
    </>
  )
}
