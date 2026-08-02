// === Components ===
import SectionWrapper from "../../../components/SectionWrapper";
import CoursesFilter from "../../../components/CoursesFilter";
import SearchCourses from "../../../components/SearchCourses";

// === Utils ===
import { getCourses } from "../../../lib/courses";
import { getLocale } from "next-intl/server";
import { Suspense } from "react";

// === Page ===
export default async function ExplorePage() {
  const locale = await getLocale();
  const courses = await getCourses("", locale);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <SectionWrapper>
          <div className="flex gap-12 min-h-[76vh]">
            <div className="w-3/4">
              <div>
                <h2 className="font-bold text-olive-900 text-2xl">
                  Find your course
                </h2>
                <p className="mt-2 text-gray-500">
                  Explore our wide range of IT courses and find the perfect one
                  for you.
                </p>
              </div>

              <div className="mt-6">
                <SearchCourses courses={courses} />
              </div>
            </div>

            <div className="w-1/4 border-l border-gray-200 pl-8">
              <CoursesFilter />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </Suspense>
  );
}
