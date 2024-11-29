import { ProfileStore } from "./profileStore"
import { AppStore } from "./appStore"
import { DevicesSubscrStore } from "./devicesSubscrStore"
import { Store, registerInDevtools } from "pullstate"
import { CheckedFilterStore } from "./checkedFilterStore"

export const PullstateCore = new Store({
  AppStore,
  ProfileStore,
})

registerInDevtools({
  AppStore,
  ProfileStore,
  DevicesSubscrStore,
  CheckedFilterStore,
})
