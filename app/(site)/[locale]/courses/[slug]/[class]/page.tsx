/* eslint-disable @typescript-eslint/no-explicit-any */

// === Components ===
import SectionWrapper from "../../../../../components/SectionWrapper";
import CourseContent from "../../../../../components/CourseContent";
import CourseModulesCheckList from "../../../../../components/CourseModulesCheckList";

// === Utils ===
import { getCourse } from "../../../../../lib/courses";

// === Page ===
export default async function ClassPage({
  params,
}: {
  params: Promise<{ slug: string; class: string; locale: string }>;
}) {
  const { slug, class: slugClass, locale } = await params;
  const course = await getCourse(slug, locale);

  return (
    <SectionWrapper classNameInner="pt-12">
      <div className="flex gap-6 lg:gap-12 min-h-[75vh] flex-col-reverse lg:flex-row justify-end">
        <div className="w-full lg:w-3/4">
          <CourseContent slug={slug} slugClass={slugClass} lang={locale} />
        </div>

        <div className="w-full lg:w-1/4">
          <CourseModulesCheckList
            modules={course.modules}
            slug={slug}
            totalClassesCount={course.totalClassesCount}
            title={course.title}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
