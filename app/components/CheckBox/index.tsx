"use client";

// === Components ===
import { Check } from "lucide-react";

// === Utils ===
import { CheckBoxProps } from "./types";
import { twMerge } from "tailwind-merge";

// === Component ===
export default function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      className="flex items-start gap-4 cursor-pointer"
      onClick={handleChange}
    >
      <div
        className={twMerge(
          "flex-shrink-0 flex h-5 w-5 items-center justify-center rounded border border-border",
          checked && "bg-primary",
        )}
      >
        {checked && <Check className="text-white" size={16} />}
      </div>

      <span className="text-left">{label}</span>
    </button>
  );
}
