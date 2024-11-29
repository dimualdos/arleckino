import { Store } from "pullstate"
import { ReactNode } from "react"

interface AppStoreProps {
  faqFilter: string
}

export const AppStore = new Store<AppStoreProps>({
  faqFilter: "",
})

export const storeFilterSetContent = (value: string) => {
  AppStore.update((store) => {
    store.faqFilter = value
  })
}
