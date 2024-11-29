export type AddDeviceProps = {
  name: string
  comment: string
  serverType: ServerType
  serverTypeStatus: ServerTypeStatus
  serverTypeProgress: number
}

export type ServerType = "cdn" | "custom"
export type ServerTypeStatus = "none" | "progress" | "completed" | "error"
