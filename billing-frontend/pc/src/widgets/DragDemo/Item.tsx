import clsx from "clsx"
import { GripVertical } from "lucide-react"
import React, { forwardRef, HTMLAttributes, CSSProperties } from "react"

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string
  withOpacity?: boolean
  isDragging?: boolean
}

const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, withOpacity, isDragging, style, ...props }, ref) => {
  return (
    <div
      className={clsx("relative flex size-[140px] origin-center items-center justify-center rounded-lg bg-white transition-all duration-300", {
        "opacity-50": withOpacity,
        "shadow-md": !isDragging,
        "shadow-xl": isDragging,
        "scale-105": isDragging,
      })}
      style={style}
      ref={ref}
    >
      <div>{id}</div>
      <div
        {...props}
        className="absolute right-2 top-2 cursor-grab"
      >
        <GripVertical />
      </div>
    </div>
  )
})

Item.displayName = 'Item';
export default Item
