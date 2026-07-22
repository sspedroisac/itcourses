// === Components ===
import SectionInfo from "../SectionInfo";
import SectionWrapper from "../SectionWrapper";
import CoursesCard from "../CourseCard";
import { Pin } from "lucide-react";

// == Component ===
export default function OurCourses() {
  const courses = [
    {
      title: "React for Beginners",
      modulesCount: 18,
      progress: 50,
      isFavorite: true,
      progressColor: "bg-green-500",
      iconColor: "text-yellow-500",
      iconBgColor: "bg-yellow-100",
    },
    {
      title: "Advanced JavaScript",
      modulesCount: 12,
      progress: 75,
      isFavorite: false,
      icon: <Pin />,
    },
    {
      title: "Full-Stack Development",
      modulesCount: 24,
      progress: 30,
      isFavorite: true,
    },
  ];

  const renderCourses = () => {
    return courses.map((course, index) => (
      <CoursesCard
        key={index}
        title={course.title}
        modulesCount={course.modulesCount}
        progress={course.progress}
        isFavorite={course.isFavorite}
        progressColor={course.progressColor}
        icon={course.icon}
        iconColor={course.iconColor}
        iconBgColor={course.iconBgColor}
      />
    ));
  };

  return (
    <SectionWrapper>
      <SectionInfo
        title="Our Courses"
        description="We offer a variety of courses designed to help you achieve your goals. Explore our offerings and find the perfect course for you."
        linkHref="/"
        linkText="Explore Courses"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderCourses()}
      </div>
    </SectionWrapper>
  );
}
