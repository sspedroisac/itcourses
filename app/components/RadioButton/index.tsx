"use client";

// === Utils ===
import { RadioButtonProps } from "./types";

// === Component ===
export default function RadioButton({
  label,
  checked,
  onChange,
  className,
}: RadioButtonProps) {
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
      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-border">
        {checked && <div className="w-3 h-3 bg-primary rounded-full" />}
      </div>
      <span className={className}>{label}</span>
    </button>
  );
}
