"use client";

import React, { forwardRef, useCallback, useRef } from "react";
import useResizeObserver from "use-resize-observer";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  Tree,
  Folder,
  File,
  CollapseButton,
  TreeViewElement,
} from "./tree-view-api";
import { cn } from "../../utils/cn";

// TODO: Add the ability to add custom icons

interface TreeViewComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

type TreeViewProps = {
  initialSelectedId?: string;
  elements: TreeViewElement[];
  indicator?: boolean;
} & (
  | {
      initialExpendedItems?: string[];
      expandAll?: false;
    }
  | {
      initialExpendedItems?: undefined;
      expandAll: true;
    }
) &
  TreeViewComponentProps;

export const TreeView = ({
  elements,
  className,
  initialSelectedId,
  initialExpendedItems,
  expandAll = false,
  indicator = false,
}: TreeViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { getVirtualItems, getTotalSize } = useVirtualizer({
    count: elements.length,
    getScrollElement: () => containerRef.current,
    estimateSize: useCallback(() => 40, []),
    overscan: 5,
  });

  const { height = getTotalSize(), width } = useResizeObserver({
    ref: containerRef,
  });
  return (
    <div
      ref={containerRef}
      className={cn(
        "rounded-md outline h-60 w-96 outline-1 outline-muted overflow-hidden py-1 relative ",
        className
      )}
    >
      <Tree
        initialSelectedId={initialSelectedId}
        initialExpendedItems={initialExpendedItems}
        elements={elements}
        style={{ height, width }}
      >
        {getVirtualItems().map((element) => (
          <TreeItem
            aria-label="Root"
            key={element.key}
            elements={[elements[element.index]]}
            indicator={indicator}
          />
        ))}
        <CollapseButton elements={elements} expandAll={expandAll}>
          <span>Expand All</span>
        </CollapseButton>
      </Tree>
    </div>
  );
};

TreeView.displayName = "TreeView";

export const TreeItem = forwardRef<
  HTMLUListElement,
  {
    elements?: TreeViewElement[] | TreeViewElement;
    indicator?: boolean;
  } & React.HTMLAttributes<HTMLUListElement>
>(({ className, elements, indicator, ...props }, ref) => {
  return (
    <ul ref={ref} className="w-full" {...props}>
      {elements instanceof Array ? (
        elements.map((element) => (
          <li key={element.id} className="w-full">
            {element.children && element.children?.length > 0 ? (
              <Folder
                element={element.name}
                indicator={indicator}
                isSelectable={element.isSelectable}
              >
                <TreeItem
                  key={element.id}
                  aria-label={`folder ${element.name}`}
                  elements={element.children}
                  indicator={indicator}
                />
              </Folder>
            ) : (
              <File
                aria-label={`File ${element.name}`}
                key={element.id}
                element={element.name}
                isSelectable={element.isSelectable}
              >
                <span>{element?.name}</span>
              </File>
            )}
          </li>
        ))
      ) : (
        <li className="px-1">
          <File
            aria-label={`file ${elements?.name}`}
            element={elements?.name ?? " "}
            isSelectable={elements?.isSelectable}
          >
            <span>{elements?.name}</span>
          </File>
        </li>
      )}
    </ul>
  );
});

TreeItem.displayName = "TreeItem";