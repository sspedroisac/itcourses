"use client";

// === Components ===
import Button from "../Button";
import RadioButton from "../RadioButton";

// === Utils ===
import { useState } from "react";
import { CoursesFilterProps } from "./types";
import { twMerge } from "tailwind-merge";

// === Component ===
export default function CoursesFilter({ className }: CoursesFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedFavorites, setSelectedFavorites] = useState<string | null>(
    null,
  );

  const bottomBorderClass = "border-b border-gray-200 pb-12";

  const filterSections = [
    {
      title: "Categories",
      options: ["All", "Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
      selectedOption: selectedCategory,
      onChange: setSelectedCategory,
    },
    {
      title: "Status",
      options: ["All", "Test 1", "Test 2", "Test 3"],
      selectedOption: selectedStatus,
      onChange: setSelectedStatus,
    },
    {
      title: "Favorites",
      options: ["All", "Favorites", "Not Favorites"],
      selectedOption: selectedFavorites,
      onChange: setSelectedFavorites,
    },
  ];

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedStatus(null);
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
              key={option}
              label={option}
              checked={
                section.selectedOption === option ||
                (option === "All" && section.selectedOption === null)
              }
              onChange={() => {
                section.onChange(option === "All" ? null : option);
              }}
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <span className="opacity-50">FILTERS</span>
        <Button label="Clear All" type="text" onClick={clearAllFilters} />
      </div>

      {renderFilterSections()}
    </div>
  );
}
