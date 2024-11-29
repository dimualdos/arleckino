import { Store } from "pullstate"

interface CheckedFilterStoreProps {
  activatedFilter: boolean
  activatedTypeSubscr: boolean
}

export const CheckedFilterStore = new Store<CheckedFilterStoreProps>({
  activatedFilter: false,
  activatedTypeSubscr: false,
})

export const storeCheckedFilter = (props: CheckedFilterStoreProps) => {
    CheckedFilterStore.update((store) => {
      store.activatedFilter = props.activatedFilter,
      store.activatedTypeSubscr = props.activatedTypeSubscr
    })
  }


