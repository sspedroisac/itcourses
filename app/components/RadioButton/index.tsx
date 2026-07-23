"use client";

// === Components ===
import { RadioButtonProps } from "./types";

// === Utils ===
import { useState, useEffect } from "react";

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
      <div className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-full">
        {checked && <div className="w-3 h-3 bg-primary rounded-full" />}
      </div>
      <span className={className}>{label}</span>
    </button>
  );
}
