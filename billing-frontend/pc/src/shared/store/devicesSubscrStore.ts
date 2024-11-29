import { Store } from "pullstate"

interface DevicesSubscrStoreProps {
  data: { device_name: string; validEndData: string; days_amount: number; amount: number }[]
  totalPrice: number
  subscrErrorText: string
}

export const DevicesSubscrStore = new Store<DevicesSubscrStoreProps>({
  data: [{ device_name: "", validEndData: "", days_amount: 0, amount: 0 }],
  totalPrice: 0,
  subscrErrorText: "",
})

export const storeDevicesSubscr = (props: DevicesSubscrStoreProps) => {
  DevicesSubscrStore.update((store) => {
    store.data = props.data
    store.totalPrice = props.totalPrice
    store.subscrErrorText = props.subscrErrorText
  })
}
