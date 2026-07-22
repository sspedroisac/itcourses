// === Utils ===
import { twMerge } from "tailwind-merge";
import { SectionWrapperProps } from "./types";

// === Component ===
export default function SectionWrapper({
  children,
  className,
  classNameInner,
}: SectionWrapperProps) {
  return (
    <div className={twMerge("w-full", className)}>
      <div
        className={twMerge(
          "w-full max-w-site-w mx-auto px-site-px py-20",
          classNameInner,
        )}
      >
        {children}
      </div>
    </div>
  );
}
