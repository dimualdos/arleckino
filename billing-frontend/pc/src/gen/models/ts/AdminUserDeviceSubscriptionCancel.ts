export const AdminUserDeviceSubscriptionCancelFutureType = {
  only_future: "only_future",
  active_and_future: "active_and_future",
} as const
export type AdminUserDeviceSubscriptionCancelFutureType = (typeof AdminUserDeviceSubscriptionCancelFutureType)[keyof typeof AdminUserDeviceSubscriptionCancelFutureType]
export const AdminUserDeviceSubscriptionCancelType = {
  refund: "refund",
  cancel: "cancel",
  all: "all",
} as const
export type AdminUserDeviceSubscriptionCancelType = (typeof AdminUserDeviceSubscriptionCancelType)[keyof typeof AdminUserDeviceSubscriptionCancelType]
export type AdminUserDeviceSubscriptionCancel = {
  /**
   * @type string
   */
  future_type: AdminUserDeviceSubscriptionCancelFutureType | null
  /**
   * @type string
   */
  type: AdminUserDeviceSubscriptionCancelType
}
