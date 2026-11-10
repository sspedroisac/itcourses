"use client";

// === Components ===
import Button from "../Button";
import { Edit } from "lucide-react";

// === Utils ===
import siteConfig from "../../config/site";
import { useLocale } from "next-intl";
import { ClassButtonsProps } from "./types";
import { useTranslations } from "next-intl";

// === Component ===
const ClassButtons = ({ slug, slugClass }: ClassButtonsProps) => {
  const currentLocale = useLocale();
  const t = useTranslations("classButtons");
  const buttonsClass =
    "items-center justify-center rounded border border-border text-gray.300 text-sm hover:bg-gray.100 hover:text-gray.700";

  const handleEdit = () => {
    window.open(
      `${siteConfig.github.url}/tree/main/content/${currentLocale}/courses/${slug}/${slugClass}.md`,
      "_blank",
    );
  };

  return (
    <div className="flex gap-2">
      <Button
        icon={<Edit size={16} />}
        type="text"
        label={t("edit")}
        className={buttonsClass}
        onClick={handleEdit}
      />
    </div>
  );
};

export default ClassButtons;
