'use client';

// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { generatePagination } from './generate-paginations';
import { Button } from "@/src/shared/ui/button"
import { use, useEffect, useState } from 'react';

export default function Pagination({ currentPageDevice, totalPages, onPaginationClick }: {
    currentPageDevice: number, totalPages: number,
    onPaginationClick: (page: number | string) => void
}) {
    const [totalPagesNum, totalPagesNumSet] = useState(1)

    useEffect(() => {
        totalPagesNumSet(totalPages)
    }, [totalPages])

    const allPages = generatePagination(currentPageDevice, totalPagesNum);

    return (
        <>
            <div className="inline-flex">
                <div className="flex justify-center space-x-2">
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                        if (index === 0) position = 'first';
                        if (index === allPages.length - 1) position = 'last';
                        if (allPages.length === 1) position = 'single';
                        if (page === '...') position = 'middle';

                        return (
                            <PaginationNumber
                                key={index}
                                onPaginationClick={onPaginationClick}
                                page={page}
                                position={position}
                                isActive={currentPageDevice === page}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

function PaginationNumber({
    page,
    isActive,
    position,
    onPaginationClick
}: {
    page: number | string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
    onPaginationClick: (page: number | string) => void
}) {
    const className1 = clsx(
        'size-8 rounded-xs',
    );
    return isActive || position === 'middle' ? (
        <Button
            className={className1}
            size={"none"}
            onClick={() => onPaginationClick(page)}
        >
            {`${page}`}
        </Button>
    ) : (

        <Button
            className={className1}
            variant={"grey-extra-soft"}
            size={"none"}
            onClick={() => onPaginationClick(page)}
        >

            {`${page}`}
        </Button>

    );
}


