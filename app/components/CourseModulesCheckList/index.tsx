"use client";

// === Components ===
import CheckBox from "../CheckBox";
import CourseCard from "../CourseCard";
import { Link } from "@/i18n/navigation";
import Collapse from "../Collapse";

// === Utils ===
import { useState } from "react";
import { CourseModulesCheckListProps } from "./types";
import { toogleProgress, getProgress } from "../../lib/progress";
import { useTranslations } from "next-intl";

// === Component ===
export default function CourseModulesCheckList({
  slug,
  modules,
  title,
  totalClassesCount,
  showCourseCard = true,
}: CourseModulesCheckListProps) {
  const [progress, setProgress] = useState(getProgress(slug) || []);
  const t = useTranslations("dictionary");

  const handleCheckBoxChange = (classSlug: string) => {
    toogleProgress(slug, classSlug);
    setProgress(getProgress(slug));
  };

  const renderFilterSections = () => {
    return modules.map((module) => (
      <Collapse
        key={module.title}
        title={module.title}
        className="ml-4 mr-4 mb-4"
        triggerClassName="text-olive-900"
        defaultOpen={true}
      >
        <div className="flex flex-col gap-4">
          {module.classes.map((classItem) => (
            <div key={classItem.slug} className="flex">
              <CheckBox
                checked={progress.includes(classItem.slug)}
                onChange={() => handleCheckBoxChange(classItem.slug)}
              />
              <Link
                href={{
                  pathname: `/courses/[slug]/[class]`,
                  params: { slug, class: classItem.slug },
                }}
              >
                <span>{classItem.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </Collapse>
    ));
  };

  return (
    <div>
      <div>
        {showCourseCard && (
          <CourseCard
            title={title}
            totalClassesCount={totalClassesCount}
            slug={slug}
            progress={(progress.length / totalClassesCount) * 100}
          />
        )}
      </div>
      <Collapse
        title={t("modules")}
        className="mt-6 p-0"
        defaultOpen={true}
        triggerClassName="border-b border-gray-200 p-4"
      >
        {renderFilterSections()}
      </Collapse>
    </div>
  );
}
