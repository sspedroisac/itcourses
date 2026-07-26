// === Components ===
import SectionWrapper from "../../components/SectionWrapper";
import CoursesFilter from "../../components/CoursesFilter";
import SearchCourses from "../../components/SearchCourses";

import { getCourses } from "../../lib/courses";

// === Page ===
export default async function ExplorePage() {
  const courses = await getCourses();

  return (
    <div>
      <SectionWrapper>
        <div className="flex gap-12 min-h-[76vh]">
          <div className="w-1/4 border-r border-gray-200 pr-4">
            <CoursesFilter />
          </div>
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
        </div>
      </SectionWrapper>
    </div>
  );
}
