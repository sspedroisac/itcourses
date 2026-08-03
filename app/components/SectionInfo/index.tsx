// === Component ===
import { ArrowRightIcon } from "lucide-react";

// === Utils ===
import { Link } from "@/i18n/navigation";
import { SectionInfoProps } from "./types";

// === Component ===
export default function SectionInfo({
  title,
  description,
  showLink = true,
  linkText,
  linkHref,
}: SectionInfoProps) {
  return (
    <section className="bg-background text-olive">
      <div className="flex flex-col justify-between items-center md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-xl font-bold text-center md:text-left">
            {title}
          </h1>
          <p className="opacity-70 line-height-6 mt-2 text-center md:text-left">
            {description}
          </p>
        </div>

        {showLink && (
          <Link
            href={{
              pathname: linkHref || "/",
            }}
            className="flex items-center gap-2 text-primary mt-4 md:mt-0 hover:opacity-85"
          >
            {linkText} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
