// === Components ===
import SectionWrapper from "../../components/SectionWrapper";
import CourseCard from "../../components/CourseCard";
import CourseContent from "../../components/CourseContent";
import CourseModulesCheckList from "../../components/CourseModulesCheckList";

// === Page ===
export default function CoursePage() {
  return (
    <SectionWrapper>
      <div className="flex gap-12">
        <div className="w-1/4 border-r border-gray-200 pr-4">
          <CourseCard title="Test" modulesCount={12} progress={12} />

          <CourseModulesCheckList />
        </div>

        <div className="w-3/4">
          <CourseContent content="course content" />
        </div>
      </div>
    </SectionWrapper>
  );
}
