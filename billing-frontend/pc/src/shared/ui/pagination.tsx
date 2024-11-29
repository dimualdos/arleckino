import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/src/shared/utils/cn"
import { ButtonProps, buttonVariants } from "@/src/shared/ui/button"
import Link from "next/link"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("flex justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("size-8 h-6 min-h-8 min-w-8 *:min-h-8 *:min-w-8", className)}
    {...props}
  />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> & React.ComponentProps<typeof Link>

const PaginationLink = ({ className, isActive, size = "xs", ...props }: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "accent" : "grey-extra-soft",
        size,
      }),
      className,
    )}
    {...props}
  ></Link>
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({ className, size = "xs", ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(
      "relative",
      buttonVariants({
        variant: "grey-extra-soft",
        size,
      }),
      className,
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, size = "xs", ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(
      buttonVariants({
        variant: "grey-extra-soft",
        size,
      }),
      className,
    )}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("inline-flex size-8 min-w-8 max-w-8 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4 text-grey" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
