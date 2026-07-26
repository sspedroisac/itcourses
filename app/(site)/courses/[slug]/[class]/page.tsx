// === Components ===
import SectionWrapper from "../../../../components/SectionWrapper";
import CourseContent from "../../../../components/CourseContent";
import CourseModulesCheckList from "../../../../components/CourseModulesCheckList";

// === Utils ===
import { getCourse } from "../../../../lib/courses";

// === Page ===
export default async function ClassPage({
  params,
}: {
  params: Promise<{ slug: string; class: string }>;
}) {
  const { slug, class: slugClass } = await params;
  const course = await getCourse(slug);

  return (
    <SectionWrapper>
      <div className="flex gap-12 min-h-[75vh]">
        <div className="w-1/4 border-r border-gray-200 pr-4">
          <CourseModulesCheckList
            modules={course.modules}
            slug={slug}
            totalClassesCount={course.totalClassesCount}
            title={course.title}
          />
        </div>

        <div className="w-3/4">
          <CourseContent slug={slug} slugClass={slugClass} />
        </div>
      </div>
    </SectionWrapper>
  );
}
