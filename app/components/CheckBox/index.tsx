"use client";

// === Components ===
import { Check } from "lucide-react";

// === Utils ===
import { CheckBoxProps } from "./types";

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
      <div className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded border border-border">
        {checked && <Check className="text-primary" size={16} />}
      </div>

      <span className="text-left">{label}</span>
    </button>
  );
}
