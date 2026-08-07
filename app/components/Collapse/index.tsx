"use client";

// === Components ===
import { CollapseProps } from "./types";
import { ChevronDown } from "lucide-react";
import Button from "../Button";

// === Utils ===
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// === Component ===
export default function Collapse({
  title,
  children,
  className,
  triggerClassName,
  defaultOpen = false,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={twMerge("border border-gray-200 rounded p-4", className)}>
      <div className="flex items-center justify-between">
        <Button
          label={title}
          icon={<ChevronDown />}
          type="text"
          className={twMerge(
            "p-0 text-gray-500 hover:text-gray-700 flex justify-between w-full flex-row-reverse text-left",
            triggerClassName,
          )}
          onClick={handleToggle}
        />
      </div>
      <div
        className={twMerge(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500vh] mt-6" : "max-h-0 mt-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
