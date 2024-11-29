import React from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/src/shared/ui/pagination"

interface ComponentProps {
  scrollTop?: boolean
  pathname: string
  count: number // Total number of items
  itemsPerPage: number
  currentPage: number // Current active page
  onPageChange: (page: number) => void // Function to call when page is changed
  maxPageButtonsToShow?: number // Max number of page numbers to show in the pagination
  hideArrows?: boolean
  hideDots?: boolean
}

export const AppPagination = ({ pathname, scrollTop = false, count, hideArrows, hideDots, itemsPerPage, currentPage, onPageChange, maxPageButtonsToShow = 5 }: ComponentProps) => {
  // Calculate total pages
  const totalPages = Math.ceil(count / itemsPerPage)

  // Function to determine if ellipsis should be shown
  const shouldShowEllipsis = (page: number) => {
    const minPageLimit = Math.max(currentPage - (maxPageButtonsToShow - 2), 1)
    const maxPageLimit = Math.min(currentPage + (maxPageButtonsToShow - 2), totalPages)
    return page < minPageLimit || page > maxPageLimit
  }

  // Generate page buttons dynamically
  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = []
    let lastPageAdded = 0

    for (let i = 1; i <= totalPages; i++) {
      if (i === totalPages || !shouldShowEllipsis(i)) {
        if (lastPageAdded && i - lastPageAdded > 1 && !hideDots) {
          pageNumbers.push(
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>,
          )
        }
        pageNumbers.push(
          <PaginationItem key={i}>
            <PaginationLink
              scroll={scrollTop}
              href={`${pathname}?page=${i}`}
              isActive={i === currentPage}
              onClick={(e) => {
                onPageChange(i)
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
        lastPageAdded = i
      }
    }
    return pageNumbers
  }

  return (
    <Pagination>
      <PaginationContent>
        {!hideArrows && currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              scroll={scrollTop}
              href={`${pathname}?page=${currentPage - 1}`}
              onClick={(e) => {
                onPageChange(currentPage - 1)
              }}
            />
          </PaginationItem>
        )}
        {renderPageNumbers()}
        {!hideArrows && currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              scroll={scrollTop}
              href={`${pathname}?page=${currentPage + 1}`}
              onClick={(e) => {
                onPageChange(currentPage - 1)
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
