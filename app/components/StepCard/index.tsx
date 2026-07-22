// === Utils ===
import type { StepCardProps } from "./types";
import { twMerge } from "tailwind-merge";

// === Component ===
export default function StepCard({
  step,
  title,
  description,
  icon,
  iconWrapperClassName,
  stepWrapperClassName,
}: StepCardProps) {
  return (
    <div className="border border-olive-200 p-4 rounded flex flex-col gap-4 shadow-2xs">
      <div
        className={twMerge(
          `bg-blue-100 w-12 h-12 rounded flex items-center justify-center text-primary`,
          iconWrapperClassName,
        )}
      >
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2">
          {step && (
            <span
              className={twMerge(
                `font-bold text-lg bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full`,
                stepWrapperClassName,
              )}
            >
              {step}
            </span>
          )}
          <span>{title}</span>
        </div>
      </div>
      <p className="opacity-70">{description}</p>
    </div>
  );
}
