// === Components ===
import SectionWrapper from "../../../components/SectionWrapper";
import CoursesFilter from "../../../components/CoursesFilter";
import SearchCourses from "../../../components/SearchCourses";

// === Utils ===
import { getCourses } from "../../../lib/courses";
import { getLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";

// === Page ===
export default async function ExplorePage() {
  const locale = await getLocale();
  const courses = await getCourses("", locale);
  const t = await getTranslations("coursesPage");

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-[76vh]">
          Loading...
        </div>
      }
    >
      <div>
        <SectionWrapper classNameInner="pt-12">
          <div className="flex justify-end flex-col-reverse md:flex-row gap-12 min-h-[76vh]">
            <div className="w-full md:w-3/4">
              <div>
                <h2 className="font-bold text-olive-900 text-2xl">
                  {t("title")}
                </h2>
                <p className="mt-2 text-gray-500">{t("description")}</p>
              </div>

              <div className="w-full mt-6 md:hidden">
                <CoursesFilter />
              </div>

              <div className="mt-6">
                <SearchCourses courses={courses} />
              </div>
            </div>

            <div className="w-1/4 border-l border-gray-200 pl-8 hidden md:block">
              <CoursesFilter />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </Suspense>
  );
}
