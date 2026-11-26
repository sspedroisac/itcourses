"use client";

// === Components ===
import Button from "../Button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

// === Utils ===
import { useTranslations } from "next-intl";
import { NextClassButtonProps } from "./types";

// === Component ===
export default function NextClassButton({
  slug,
  nextClassSlug,
}: NextClassButtonProps) {
  const t = useTranslations("classButtons");

  if (!nextClassSlug) return null;

  const buttonsClass =
    "items-center justify-center rounded border border-border text-gray.300 text-sm hover:bg-gray.100 hover:text-gray.700";

  return (
    <Link
      href={{
        pathname: "/courses/[slug]/[class]",
        params: { slug, class: nextClassSlug },
      }}
      aria-label={t("nextClass")}
      className="inline-flex"
    >
      <Button
        icon={<ArrowRight size={16} />}
        label={""}
        type="outlined"
        className={buttonsClass}
      />
    </Link>
  );
}
