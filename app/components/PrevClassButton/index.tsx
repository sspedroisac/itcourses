"use client";

// === Components ===
import Button from "../Button";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

// === Utils ===
import { useTranslations } from "next-intl";
import { PrevClassButtonProps } from "./types";

// === Component ===
export default function PrevClassButton({
  slug,
  prevClassSlug,
}: PrevClassButtonProps) {
  const t = useTranslations("classButtons");

  if (!prevClassSlug) return null;

  const buttonsClass =
    "items-center justify-center rounded border border-border text-gray.300 text-sm hover:bg-gray.100 hover:text-gray.700";

  return (
    <Link
      href={{
        pathname: "/courses/[slug]/[class]",
        params: { slug, class: prevClassSlug },
      }}
      aria-label={t("prevClass")}
      className="inline-flex"
    >
      <Button
        icon={<ArrowLeft size={16} />}
        type="outlined"
        className={buttonsClass}
      />
    </Link>
  );
}
