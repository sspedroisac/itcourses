"use client";

// === Utils ===
import { twMerge } from "tailwind-merge";
import { DropdownProps } from "./types";
import { useState } from "react";

// === Component ===
export default function Dropdown({
  children,
  trigger,
  className,
  contentClassName,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperClass =
    "relative rounded border border-border bg-transparent px-2 py-1";

  const contentWrapperClass =
    "absolute top-full left-0 z-10 mt-4 w-fit rounded-md border border-border bg-surface px-2 py-1 text-foreground shadow-lg";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={className ? twMerge(wrapperClass, className) : wrapperClass}
    >
      <button onClick={toggleDropdown}>{trigger}</button>
      {isOpen && (
        <div className={twMerge(contentWrapperClass, contentClassName)}>
          {children}
        </div>
      )}
    </div>
  );
}
