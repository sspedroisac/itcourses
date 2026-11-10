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
    <div className={twMerge("rounded border border-border bg-surface p-4", className)}>
      <div className="flex items-center justify-between">
        <Button
          label={title}
          icon={<ChevronDown />}
          type="text"
          className={twMerge(
            "flex w-full flex-row-reverse justify-between p-0 text-left text-muted-foreground hover:text-foreground",
            triggerClassName,
          )}
          onClick={handleToggle}
        />
      </div>
      <div
        className={twMerge(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[10000vh] mt-6" : "max-h-0 mt-0",
        )}
      >
        {children}
      </div>
    </div>
  );
}
