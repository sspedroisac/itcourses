/* eslint-disable react-hooks/set-state-in-effect */

"use client";

// === Components ===
import CourseCard from "../CourseCard";
import Button from "../Button";
import { Search } from "lucide-react";

// === Utils ===
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchCoursesProps } from "./type";
import { isCourseFavorite } from "../../lib/favorites";
import { getProgressPercentage } from "../../lib/progress";
import { useTranslations } from "next-intl";

// === Component ===
export default function SearchCourses({ courses }: SearchCoursesProps) {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("searchCourses");
  const searchParams = useSearchParams();
  const router = useRouter();

  const renderCourses = () => {
    return filteredCourses.map((course) => (
      <CourseCard
        key={course.slug}
        title={course.title}
        totalClassesCount={course.totalClassesCount}
        slug={course.slug}
        progress={getProgressPercentage(course.slug, course.totalClassesCount)}
      />
    ));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const params = new URLSearchParams(searchParams);
    params.set("query", searchQuery);
    router.replace(`/courses?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const query = params.get("query") || "";
    const favorite = params.get("favorite");
    let filtered = courses;

    if (favorite === "1") {
      filtered = filtered.filter((course) => isCourseFavorite(course.slug));
    } else if (favorite === "0") {
      filtered = filtered.filter((course) => !isCourseFavorite(course.slug));
    } else {
      filtered = courses;
    }

    filtered = filtered.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCourses(filtered);
  }, [searchParams, courses]);

  return (
    <div>
      <div className="flex items-center relative gap-4 flex-col md:flex-row">
        <span className="text-gray-500 absolute left-3 top-[22] md:top-1/2 transform -translate-y-1/2">
          <Search />
        </span>
        <input
          onChange={handleSearch}
          value={searchQuery}
          type="text"
          placeholder={t("searchPlaceholder")}
          className="w-full rounded border border-gray-200 bg-white py-2 pl-14 pr-4 text-gray-700"
        />
        <Button
          label={t("searchButton")}
          onClick={handleSearchSubmit}
          className="w-full md:w-fit"
        />
      </div>
      <div className="flex flex-col gap-6 mt-6">{renderCourses()}</div>
    </div>
  );
}
