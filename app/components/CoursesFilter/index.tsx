"use client";

// === Components ===
import Button from "../Button";
import RadioButton from "../RadioButton";

// === Utils ===
import { useState, useEffect } from "react";
import { CoursesFilterProps } from "./types";
import { twMerge } from "tailwind-merge";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// === Component ===
export default function CoursesFilter({ className }: CoursesFilterProps) {
  const [selectedFavorites, setSelectedFavorites] = useState<string | null>(
    null,
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations("coursesFilter");

  const bottomBorderClass = "border-b border-gray-200 pb-12";

  const filterSections = [
    {
      title: t("favorites"),
      options: [
        {
          label: t("all"),
          value: null,
        },
        {
          label: t("notFavorites"),
          value: "0",
        },
        {
          label: t("favorites"),
          value: "1",
        },
      ],
      selectedOption: selectedFavorites,
      onChange: setSelectedFavorites,
    },
  ];

  const clearAllFilters = () => {
    setSelectedFavorites(null);
  };

  const renderFilterSections = () => {
    return filterSections.map((section, index) => (
      <div
        key={section.title}
        className={twMerge(
          "mt-12",
          index < filterSections.length - 1 ? bottomBorderClass : "",
        )}
      >
        <span className="font-bold">{section.title}</span>
        <div className="mt-6 flex flex-col gap-4">
          {section.options.map((option) => (
            <RadioButton
              key={option.value}
              label={option.label}
              checked={
                section.selectedOption === option.value ||
                (option.value === null && section.selectedOption === null)
              }
              onChange={() => {
                section.onChange(option.value);
              }}
            />
          ))}
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedFavorites) {
      params.set("favorite", selectedFavorites);
    } else {
      params.delete("favorite");
    }

    router.replace(`/courses?${params.toString()}`);
  }, [selectedFavorites]);

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <span className="opacity-50">{t("filters")}</span>
        <Button label={t("clearAll")} type="text" onClick={clearAllFilters} />
      </div>

      {renderFilterSections()}
    </div>
  );
}
