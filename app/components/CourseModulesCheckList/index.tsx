"use client";

// === Components ===
import CheckBox from "../CheckBox";
import CourseCard from "../CourseCard";

// === Utils ===
import { useState } from "react";
import { CourseModulesCheckListProps } from "./types";
import { toogleProgress, getProgress } from "../../lib/progress";

// === Component ===
export default function CourseModulesCheckList({
  slug,
  modules,
  title,
  totalClassesCount,
  showCourseCard = true,
}: CourseModulesCheckListProps) {
  const [progress, setProgress] = useState(getProgress(slug) || []);

  const handleCheckBoxChange = (classSlug: string) => {
    toogleProgress(slug, classSlug);
    setProgress(getProgress(slug));
  };

  const renderFilterSections = () => {
    return modules.map((module) => (
      <div key={module.title} className="mt-12">
        <span className="font-bold">{module.title}</span>
        <div className="mt-6 flex flex-col gap-4">
          {module.classes.map((classItem) => (
            <CheckBox
              key={classItem.slug}
              label={classItem.title}
              checked={progress.includes(classItem.slug)}
              onChange={() => handleCheckBoxChange(classItem.slug)}
            />
          ))}
        </div>
      </div>
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
      {renderFilterSections()}
    </div>
  );
}
