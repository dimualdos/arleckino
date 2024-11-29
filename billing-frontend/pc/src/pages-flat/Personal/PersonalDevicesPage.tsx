import dynamic from "next/dynamic"
import React, { FC } from "react"
const PersonalDevices = dynamic(import("@/src/widgets/Personal/Devices/AllDevices/ui").then((module) => module.PersonalDevices))

interface ComponentProps {}

export const PersonalDevicesPage: FC<ComponentProps> = () => {
  return <PersonalDevices />
}
