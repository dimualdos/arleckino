"use client"

import * as React from "react"
import { CompoboxItemProps } from "../types"

export function useCompobox() {
  const [open, setOpen] = React.useState(false)
  const [selected, selectedSet] = React.useState<CompoboxItemProps | null>(null)

  return {selected, selectedSet, open, setOpen}
}
