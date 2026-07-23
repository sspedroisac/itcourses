// === Components ===
import SectionWrapper from "../components/SectionWrapper";
import CoursesFilter from "../components/CoursesFilter";
import SearchCourses from "../components/SearchCourses";

// === Page ===
export default function Explore() {
  return (
    <div>
      <SectionWrapper>
        <div className="flex gap-12">
          <div className="w-1/4 border-r border-gray-200 pr-4">
            <CoursesFilter />
          </div>
          <div className="w-3/4">
            <div>
              <h2 className="font-bold text-olive-900 text-2xl">
                Find your course
              </h2>
              <p className="mt-2 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
            </div>

            <div className="mt-6">
              <SearchCourses />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
