"use client"

import { Button } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import React, { FC, useCallback, useState } from "react"
import { ChevronDown, Edit2, LucideMoreVertical, Save, Trash } from "lucide-react"
import { Groups } from "./Groups"
import { Content } from "./Content"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { CredenzaRenamePlaylist } from "@/src/widgets/Dialogs/playlist/CredenzaRenamePlaylist"
import { CredenzaDeletePlaylist } from "@/src/widgets/Dialogs/playlist/CredenzaDeletePlaylist"
import { CredenzaNewGroupPlaylist } from "@/src/widgets/Dialogs/playlist/CredenzaNewGroupPlaylist"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/src/shared/ui/dropdown-menu"
import clsx from "clsx"
import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors, DragStartEvent, DragEndEvent, KeyboardSensor, DragOverEvent } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { GridCountProps, GroupItemProp } from "../types"
import { CredenzaRenameGroup } from "@/src/widgets/Dialogs/playlist/CredenzaRenameGroup"
import { CredenzaDeleteGroup } from "@/src/widgets/Dialogs/playlist/CredenzaDeleteGroup"
import { SheetPlaylistActions } from "@/src/widgets/Dialogs/playlist/SheetPlaylistActions"
import { UserPlaylist } from "@/src/gen/models/ts/Playlist"
import { SheetSelectPlaylist } from "@/src/widgets/Dialogs/playlist/SheetSelectPlaylist"

interface ComponentProps {}

const mockGroups: GroupItemProp[] = [
  {
    id: "1",
    count: "1",
    name: "1 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "2",
    count: "2",
    name: "2 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "3",
    count: "3",
    name: "3 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "4",
    count: "4",
    name: "4 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "5",
    count: "5",
    name: "5 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "6",
    count: "6",
    name: "6 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "7",
    count: "7",
    name: "7 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "8",
    count: "8",
    name: "8 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "9",
    count: "9",
    name: "9 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "10",
    count: "10",
    name: "10 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "11",
    count: "11",
    name: "11 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "12",
    count: "12",
    name: "12 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "13",
    count: "13",
    name: "13 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "14",
    count: "14",
    name: "14 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "15",
    count: "15",
    name: "15 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "16",
    count: "16",
    name: "16 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "17",
    count: "17",
    name: "17 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "18",
    count: "18",
    name: "18 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "19",
    count: "19",
    name: "19 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
]

const mockGroups2: GroupItemProp[] = [
  {
    id: "21",
    count: "21",
    name: "1 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "22",
    count: "22",
    name: "2 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "23",
    count: "23",
    name: "3 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "24",
    count: "24",
    name: "4 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "25",
    count: "25",
    name: "5 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "26",
    count: "26",
    name: "6 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "27",
    count: "27",
    name: "7 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "28",
    count: "28",
    name: "8 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "29",
    count: "29",
    name: "9 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "30",
    count: "30",
    name: "10 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "31",
    count: "31",
    name: "11 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "32",
    count: "32",
    name: "12 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "33",
    count: "33",
    name: "13 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "34",
    count: "34",
    name: "14 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "35",
    count: "35",
    name: "15 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "36",
    count: "36",
    name: "16 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "37",
    count: "37",
    name: "17 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
  {
    id: "38",
    count: "38",
    name: "18 Lorem ipsum dolor sit amet consectetur",
    selected: false,
  },
  {
    id: "39",
    count: "39",
    name: "19 Lorem ipsum dolor sit amet consectetur",
    selected: true,
  },
]

const mockAvailablePlayLists: UserPlaylist[] = [
  {
    title: "Плейлист по умолчанию",
    id: 1,
    is_default: true,
  },
  {
    title: "Мой плейлист с очень длинным названием",
    id: 2,
    is_default: false,
  },
  {
    title: "Плейлист Тёмы",
    id: 3,
    is_default: false,
  },
  {
    title: "Плейлист дедушки",
    id: 4,
    is_default: false,
  },
  {
    title: "Плейлист детский",
    id: 5,
    is_default: false,
  },
]

export const PersonalUpdateChannels: FC<ComponentProps> = () => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor), useSensor(KeyboardSensor), useSensor(KeyboardSensor))
  const onSelectServer = (value: string | undefined) => {}

  const [selectedGrupToRename, selectedGrupToRenameSet] = useState<GroupItemProp | null>(null)
  const [selectedGrupToDelete, selectedGrupToDeleteSet] = useState<GroupItemProp | null>(null)
  const [gridCount, gridCountSet] = useState<GridCountProps>(1)
  const [selectedPlaylist, selectedPlaylistSet] = useState<UserPlaylist | null>({ title: "Мой плейлист с очень длинным названием", id: 1, is_default: true })
  const [items, setItems] = useState<GroupItemProp[]>(mockGroups)
  const [items2, setItems2] = useState<GroupItemProp[]>(mockGroups2)
  const [activeItem, activeItemSet] = useState<GroupItemProp | null | undefined>(null)
  const [activeItem2, activeItem2Set] = useState<GroupItemProp | null | undefined>(null)
  const { active: isActiveRootSheet, setActive: onChangeRootSheet, toggle: toggleChangeRootSheet } = useToggle(false)
  const { active: isActiveSelectPlayList, setActive: onChangeSelectPlayList, toggle: toggleChangeSelectPlayList } = useToggle(false)
  const { active: isActiveDropdown, setActive: onChangeActiveDropdown } = useToggle(false)
  const { active: isActiveRenamePlaylist, setActive: onChangeActiveRenamePlaylist, toggle: toggleActiveRenamePlaylist } = useToggle(false)
  const { active: isActiveRenameGroup, setActive: onChangeActiveRenameGroup, toggle: toggleActiveRenameGroup } = useToggle(false)
  const { active: isActiveDeleteGroup, setActive: onChangeActiveDeleteGroup, toggle: toggleActiveDeleteGroup } = useToggle(false)
  const { active: isActiveDeletePlaylist, setActive: onChangeDeletePlaylist, toggle: toggleActiveDeletePlaylist } = useToggle(false)
  const { active: isActiveCreateNewGroups, setActive: onChangeCreateNewGroup, toggle: toggleActiveCreateNewGroups } = useToggle(false)
  const { active: isActiveSidebar, setActive: onChangeActiveSidebar, toggle: toggleActiveSidebar } = useToggle(true)

  const handleToggleGroupToRename = (item: GroupItemProp, open: boolean) => {
    selectedGrupToRenameSet(item)
    onChangeActiveRenameGroup(open)
  }
  const handleToggleGroupToDelete = (item: GroupItemProp, open: boolean) => {
    selectedGrupToDeleteSet(item)
    onChangeActiveDeleteGroup(open)
  }
  const handleSetGridCount = (val: GridCountProps) => () => gridCountSet(val)
  const onSubmitSelectPlayList = (playList: UserPlaylist) => () => {
    selectedPlaylistSet(playList)
    onChangeSelectPlayList(false)
  }

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const findItem = items.find((search) => search.id === event.active.id)
    activeItemSet(findItem)
  }, [])

  const onRenamePlaylist = () => {
    toggleActiveRenamePlaylist()
  }
  const onChangePlaylist = () => {
    toggleChangeSelectPlayList()
  }
  const onDeletePlaylist = () => {
    toggleActiveDeletePlaylist()
  }

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id && over) {
      setItems((items) => {
        const newIndex = items.findIndex((search) => search.id === active.id)
        const oldIndex = items.findIndex((search) => search.id === over.id)
        return arrayMove(items, newIndex, oldIndex)
      })
    }
    activeItemSet(null)
  }, [])

  const handleDragCancel = useCallback(() => {
    activeItemSet(null)
  }, [])

  const onDragOver = (event: DragOverEvent) => {
    console.log("onDragOver: ", event)
  }

  const handleDragStart2 = useCallback((event: DragStartEvent) => {
    const findItem = items2.find((search) => search.id === event.active.id)
    activeItem2Set(findItem)
  }, [])

  const handleDragEnd2 = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id && over) {
      setItems2((items) => {
        const newIndex = items.findIndex((search) => search.id === active.id)
        const oldIndex = items.findIndex((search) => search.id === over.id)
        return arrayMove(items, newIndex, oldIndex)
      })
    }
    activeItem2Set(null)
  }, [])

  const handleDragCancel2 = useCallback(() => {
    activeItem2Set(null)
  }, [])

  const onSubmitRenamePlaylist = () => {
    alert("Updated")
    toggleActiveRenamePlaylist()
  }

  const onSubmitRenameGroup = () => {
    alert("Updated")
    toggleActiveRenameGroup()
  }

  const onSubmitDeletePlaylist = () => {
    alert("Deleted")
    toggleActiveDeletePlaylist()
  }

  const onSubmitDeleteGroup = () => {
    alert("Deleted")
    toggleActiveDeletePlaylist()
  }

  const onSubmitCreateNewGroup = () => {
    alert("Created")
    toggleActiveCreateNewGroups()
  }

  return (
    <>
      <div className="flex flex-1 flex-col">
        <AppHeader className="flex-row items-center justify-between space-y-2 lg:flex-col lg:items-start lg:space-y-1 lg:py-6">
          <h1 className="lg:text-2xl">
            Список каналов для устройства: <span className="text-purple">Телевизор</span>
          </h1>
          <p className="hidden text-base font-medium text-grey-extra-hard lg:block">
            Выбирайте плейлист и меняйте в нем набор групп и список каналов. Выбранный чекбокс добавляет группы/каналы в плейлист. Так же вы можете менять их порядок в списке
          </p>
        </AppHeader>

        <div className="flex flex-1 flex-col bg-blue-soft">
          {/* MOBILE SUB HEAD START */}
          <div className="mt-4 hidden rounded-lg bg-white lg:block">
            <div className="container flex py-6">
              <div className="mr-2">
                <p className="text-sm text-grey-hard">Плейлист</p>
                <p className="line-clamp-2 text-xl font-semibold">{selectedPlaylist?.title}</p>
              </div>
              <Button
                onClick={toggleChangeRootSheet}
                variant={"outline"}
                size={"icon"}
                className="mb-auto ml-auto bg-white"
              >
                <LucideMoreVertical className="size-5 text-black" />
              </Button>
            </div>
          </div>
          {/* MOBILE SUB HEAD END */}

          {/* DESKTOP SUB HEAD START */}
          <div className="border-b border-b-grey-soft lg:hidden">
            <div className="container flex items-start py-6">
              <div className="space-y-2 overflow-hidden">
                <p className="flex items-center space-x-1 whitespace-nowrap pr-1 text-2xl font-semibold">
                  <span>Список каналов:</span>
                  <span className="truncate text-purple">
                    Мой плейлист с очень длинным названием Lorem ipsum dolor sit amet consecteturautem ratione quaerat ex necessitatibus officiis fugit eius ipsa reiciendis rem reprehenderit vitae
                    soluta quae veniam, neque enim quasi distinctio!
                  </span>

                  <DropdownMenu
                    open={isActiveDropdown}
                    onOpenChange={onChangeActiveDropdown}
                  >
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={"transparent"}
                        size={"none"}
                      >
                        <ChevronDown
                          className={clsx("size-5 text-accent transition-all duration-300", {
                            "rotate-180": isActiveDropdown,
                          })}
                        />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="!right-0 rounded-sm p-0 pb-2"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="rounded-none px-4 text-base">Плейлист по умолчанию</DropdownMenuItem>
                        <DropdownMenuItem className="rounded-none px-4 text-base">Мой плейлист с очень длинным названием</DropdownMenuItem>
                        <DropdownMenuItem className="rounded-none px-4 text-base">Плейлист Тёмы</DropdownMenuItem>
                        <DropdownMenuItem className="rounded-none px-4 text-base">Дедушкин</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </p>
                <p className="text-grey-extra-hard">Добавляйте или удаляйте группы и каналы списка, а так же меняйте их порядок</p>
              </div>

              {/* ACTIONS START */}
              <div className="ml-10 flex items-center space-x-2">
                <Button
                  onClick={toggleActiveRenamePlaylist}
                  className="space-x-1 uppercase"
                  variant={"outline"}
                >
                  <Edit2 className="size-5" />
                  <span className="text-sm">Переименовать</span>
                </Button>
                <Button
                  onClick={toggleActiveDeletePlaylist}
                  size={"icon"}
                  variant={"outline"}
                >
                  <Trash className="size-5" />
                </Button>
              </div>
              {/* ACTIONS END */}
            </div>
          </div>
          {/* DESKTOP SUB HEAD END */}

          {/* CONTENT START */}
          <div className="container flex flex-1 lg:flex-col lg:px-0">
            {/* CONTENT GROUPS START */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragCancel={handleDragCancel}
            >
              <div
                className={clsx("w-[320px] min-w-[320px] pr-3 pt-8 transition-all duration-300 lg:mt-4 lg:w-full lg:min-w-0 lg:border-0 lg:bg-white lg:px-4", {
                  hidden: !isActiveSidebar,
                })}
              >
                <Groups
                  activeItem={activeItem}
                  items={items}
                  onOpenNewGroup={toggleActiveCreateNewGroups}
                  handleToggleGroupToRename={handleToggleGroupToRename}
                  handleToggleGroupToDelete={handleToggleGroupToDelete}
                />
              </div>
            </DndContext>
            {/* CONTENT GROUPS END */}

            {/* MAIN CHANNELS START */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart2}
              onDragEnd={handleDragEnd2}
              onDragCancel={handleDragCancel2}
              onDragOver={onDragOver}
            >
              <div className="relative w-full flex-1 border-l border-grey-soft pl-8 pr-3 pt-6 lg:p-0">
                <Content
                  gridCount={gridCount}
                  activeItem={activeItem2}
                  items={items2}
                  handleSetGridCount={handleSetGridCount}
                  isActiveSidebar={isActiveSidebar}
                  onChangeActiveSidebar={onChangeActiveSidebar}
                  toggleActiveSidebar={toggleActiveSidebar}
                />
              </div>
            </DndContext>
            {/* MAIN CHANNELS END */}
          </div>
          {/* CONTENT END */}

          {/* BOTTOM ACTIONS START */}
          <div className="mt-auto flex items-center bg-white">
            <div className="container py-8">
              <Button className="space-x-1 uppercase lg:w-full">
                <Save className="size-5 text-white" />
                <span>Сохранить</span>
              </Button>
            </div>
          </div>
          {/* BOTTOM ACTIONS END */}
        </div>
      </div>

      <SheetSelectPlaylist
        onSubmitSelectPlayList={onSubmitSelectPlayList}
        isOpen={isActiveSelectPlayList}
        onChange={onChangeSelectPlayList}
        availablePlayLists={mockAvailablePlayLists}
      />

      <SheetPlaylistActions
        isOpen={isActiveRootSheet}
        onChange={onChangeRootSheet}
        selectedPlaylist={selectedPlaylist}
        onRenamePlaylist={onRenamePlaylist}
        onChangePlaylist={onChangePlaylist}
        onDeletePlaylist={onDeletePlaylist}
      />

      <CredenzaRenameGroup
        selectedGrupToRename={selectedGrupToRename}
        isOpen={isActiveRenameGroup}
        onChange={onChangeActiveRenameGroup}
        onSubmit={onSubmitRenameGroup}
      />

      <CredenzaRenamePlaylist
        isOpen={isActiveRenamePlaylist}
        onChange={onChangeActiveRenamePlaylist}
        onSubmit={onSubmitRenamePlaylist}
      />

      <CredenzaDeletePlaylist
        isOpen={isActiveDeletePlaylist}
        onChange={onChangeDeletePlaylist}
        onSubmit={onSubmitDeletePlaylist}
      />

      <CredenzaDeleteGroup
        selectedGrupToDelete={selectedGrupToDelete}
        isOpen={isActiveDeleteGroup}
        onChange={onChangeActiveDeleteGroup}
        onSubmit={onSubmitDeleteGroup}
      />

      <CredenzaNewGroupPlaylist
        isOpen={isActiveCreateNewGroups}
        onChange={onChangeCreateNewGroup}
        onSubmit={onSubmitCreateNewGroup}
      />
    </>
  )
}
