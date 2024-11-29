import { useEffect, useState } from "react"

export const useWindow = () => {
  const [isWindow, isWindowSet] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      isWindowSet(true)
    } else {
      isWindowSet(false)
    }
  }, [])
  return { isWindow }
}
