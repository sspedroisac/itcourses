// === Components ===
import CourseCard from "../CourseCard";
import { Search } from "lucide-react";

// === Component ===
export default function SearchCourses() {
  const courses = [
    {
      title: "Course 1",
      description: "Description for Course 1",
    },
    {
      title: "Course 2",
      description: "Description for Course 2",
    },
    {
      title: "Course 3",
      description: "Description for Course 3",
    },
    {
      title: "Course 4",
      description: "Description for Course 4",
    },
    {
      title: "Course 5",
      description: "Description for Course 5",
    },
  ];

  const renderCourses = () => {
    return courses.map((course, index) => (
      <CourseCard
        key={index}
        title={course.title}
        modulesCount={12}
        progress={10}
      />
    ));
  };

  return (
    <div>
      <div>
        <span className="text-gray-500">
          <Search />
        </span>
        <input
          type="text"
          placeholder="Search courses"
          className="w-full rounded border border-gray-300 bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col gap-6 mt-6">{renderCourses()}</div>
    </div>
  );
}
