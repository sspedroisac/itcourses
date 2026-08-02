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
    "relative bg-transparent border border-gray-300 rounded px-2 py-1";

  const contentWrapperClass =
    "absolute top-full left-0 w-fit bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-4 px-2 py-1";

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
