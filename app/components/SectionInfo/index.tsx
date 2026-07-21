// === Component ===
import { ArrowRightIcon } from "lucide-react";

// === Utils ===
import Link from "next/link";
import { SectionInfoProps } from "./types";

// === Component ===
export default function SectionInfo({
  title,
  description,
  showLink = true,
  linkText,
  linkHref = "/",
}: SectionInfoProps) {
  return (
    <section className="bg-background text-olive">
      <div className="flex justify-between items-end">
        <div className="max-w-2xl">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="opacity-70 line-height-6 mt-2">{description}</p>
        </div>

        {showLink && (
          <Link
            href={linkHref}
            className="flex items-center gap-2 text-primary"
          >
            {linkText} <ArrowRightIcon className="w-4 h-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
