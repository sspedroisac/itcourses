// === Utils ===
import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

// === Component ===
export default function Button({
  onClick,
  disabled,
  type,
  label,
  className,
  icon,
}: ButtonProps) {
  let buttonClass =
    "cursor-pointer flex items-center justify-center gap-2 flex-row hover:opacity-85 rounded py-2 px-4 font-bold";

  buttonClass += " bg-primary text-white";

  if (type === "outlined") {
    buttonClass += " bg-transparent border border-primary text-primary";
  } else if (type === "text") {
    buttonClass += " bg-transparent text-primary";
  }

  return (
    <button
      onClick={onClick}
      className={twMerge(buttonClass, className)}
      disabled={disabled}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
