"use client";

// === Components ===
import CheckBox from "../CheckBox";
import CourseCard from "../CourseCard";
import Link from "next/link";

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
            <div key={classItem.slug} className="flex">
              <CheckBox
                checked={progress.includes(classItem.slug)}
                onChange={() => handleCheckBoxChange(classItem.slug)}
              />
              <Link href={`/courses/${slug}/${classItem.slug}`}>
                <span>{classItem.title}</span>
              </Link>
            </div>
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
