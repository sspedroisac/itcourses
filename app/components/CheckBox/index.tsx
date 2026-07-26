"use client";

// === Components ===
import { Check } from "lucide-react";

// === Utils ===
import { CheckBoxProps } from "./types";

// === Component ===
export default function CheckBox({
  label,
  checked,
  onChange,
  className,
}: CheckBoxProps) {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      className="flex items-center gap-4 cursor-pointer"
      onClick={handleChange}
    >
      <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded">
        {checked && <Check className="text-primary" />}
      </div>
      <span className={className}>{label}</span>
    </button>
  );
}
