import React from "react"
import dynamic from "next/dynamic"
const PersonalAddDevice = dynamic(import("@/src/widgets/Personal/Devices/Add/ui").then((module) => module.PersonalAddDevice))

export const PersonalAddDevicePage = () => {
  return <PersonalAddDevice />
}
