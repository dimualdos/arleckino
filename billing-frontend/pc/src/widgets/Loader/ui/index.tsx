import React from "react"

export const Loader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="m-3 inline-block h-12 w-12 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  )
}
