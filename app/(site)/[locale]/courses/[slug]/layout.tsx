// === Components ===
import SectionWrapper from "../../../../components/SectionWrapper";
import CourseModulesCheckList from "../../../../components/CourseModulesCheckList";

// === Utils ===
import { getCourse } from "../../../../lib/courses";

// === Layout ===
export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;

  const course = await getCourse(slug, locale);

  return (
    <SectionWrapper classNameInner="pt-12">
      <div className="flex gap-6 lg:gap-12 min-h-[75vh] flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-3/4">{children}</div>

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
