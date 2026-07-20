import { ButtonProps } from "./types";

export default function Button({
  onClick,
  disabled,
  type,
  label,
  className,
}: ButtonProps) {
  let buttonClass =
    "bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded";

  if (type === "outlined") {
    buttonClass =
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-4 rounded";
  } else if (type === "text") {
    buttonClass =
      "bg-transparent text-primary hover:text-primary font-bold py-2 px-4 rounded";
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${className ?? ""}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
