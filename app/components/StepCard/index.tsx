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
    <div className="flex flex-col gap-4 rounded border border-border bg-surface p-4 shadow-2xs">
      <div
        className={twMerge(
          `w-12 h-12 rounded bg-surface-muted flex items-center justify-center text-primary`,
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
                `font-bold text-lg bg-button text-white w-6 h-6 flex items-center justify-center rounded-full`,
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
