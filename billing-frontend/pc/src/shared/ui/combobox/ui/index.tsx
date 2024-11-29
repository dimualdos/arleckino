"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Button } from "@/src/shared/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/src/shared/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/src/shared/ui/popover"
import { cn } from "@/src/shared/utils/cn"
import { CompoboxProps } from "../types"

export function Combobox({ availableItems, onSelectValue, selectedItem, placeholder, notFoundTitle, selectTitle, open, setOpen, }: CompoboxProps) {
  if (!availableItems || !availableItems.length) return
  return (
    <Popover 
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between !w-full"
        >
          {selectedItem ? availableItems.find((item) => item.value === selectedItem.value)?.label : selectTitle}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className={"!w-full !max-w-full p-0"}>
        <Command>
          <CommandList>
            <CommandInput
              placeholder={placeholder}
              className="h-9"
            />
            <CommandEmpty>{notFoundTitle}</CommandEmpty>
            <CommandGroup>
              {availableItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    onSelectValue(item)
                    setOpen(false)
                  }}
                >
                  {item.label}
                  <CheckIcon className={cn("ml-auto h-4 w-4", item.value === selectedItem?.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
