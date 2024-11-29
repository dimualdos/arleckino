export interface CompoboxItemProps {
  label: string
  value: string
}

export interface CompoboxProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>

  placeholder: string
  notFoundTitle: string
  selectTitle: string
  availableItems: CompoboxItemProps[] | undefined

  selectedItem: CompoboxItemProps | null
  onSelectValue: React.Dispatch<React.SetStateAction<CompoboxItemProps | null>>
}
