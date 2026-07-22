// === Utils ===
import { ProgressBarProps } from "./types";
import { twMerge } from "tailwind-merge";

// === Component ===
export default function ProgressBar({
  progress,
  showPercentage = true,
  color = "bg-blue-500",
}: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={twMerge(`h-2`, color)}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {showPercentage && (
        <span className="text-olive opacity-70">{progress}%</span>
      )}
    </div>
  );
}
