import { Store } from "pullstate"

interface ProfileStoreProps {
  activated: boolean
  email: string
  balance: number
}

export const ProfileStore = new Store<ProfileStoreProps>({
  activated: false,
  balance: 0,
  email: "",
})

export const storeLogin = (props: ProfileStoreProps) => {
  ProfileStore.update((store) => {
    store.activated = props.activated
    store.balance = props.balance
    store.email = props.email
  })
}

export const storeLogout = () => {
  ProfileStore.replace(ProfileStore._getInitialState())
}
