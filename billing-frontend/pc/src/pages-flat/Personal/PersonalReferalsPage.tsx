import React from "react"
import dynamic from "next/dynamic"
const PersonalReferals = dynamic(import("@/src/widgets/Personal/Referals/ui").then((module) => module.PersonalReferals))

export const PersonalReferalsPage = () => {
  return <PersonalReferals />
}
