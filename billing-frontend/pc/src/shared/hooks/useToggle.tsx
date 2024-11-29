import { useState } from "react"

export const useToggle = (initialValue = false) => {
  const [active, setActive] = useState(initialValue)
  const toggle = () => setActive((prev) => !prev)
  const close = () => setActive(false)
  return { active, setActive, close, toggle }
}
