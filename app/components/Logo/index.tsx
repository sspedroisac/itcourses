// === Components ===
import { MapIcon } from "lucide-react";

// === Utils ===
import { twMerge } from "tailwind-merge";
import { LogoProps } from "./types";

// === Component ===
export default function Logo({ iconClassName, titleClassName }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <MapIcon className={twMerge(`text-primary`, iconClassName)} size={32} />
      <h1 className={twMerge(`text-xl font-bold`, titleClassName)}>Courses</h1>
    </div>
  );
}
