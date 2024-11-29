import React from "react"
import dynamic from "next/dynamic"
const PersonalLog = dynamic(import("@/src/widgets/Personal/Log/ui").then((module) => module.PersonalLog))

export const PersonalLogPage = () => {
  return <PersonalLog />
}
