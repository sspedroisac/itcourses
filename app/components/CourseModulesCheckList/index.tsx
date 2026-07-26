// === Components ===
import CheckBox from "../CheckBox";

// === Component ===
export default function CourseModulesCheckList() {
  const modules = [
    {
      title: "Categories",
      options: ["All", "Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
    },
    {
      title: "Status",
      options: ["All", "Test 1", "Test 2", "Test 3"],
    },
    {
      title: "Favorites",
      options: ["All", "Favorites", "Not Favorites"],
    },
  ];

  const renderFilterSections = () => {
    return modules.map((section, index) => (
      <div key={section.title} className="mt-12">
        <span className="font-bold">{section.title}</span>
        <div className="mt-6 flex flex-col gap-4">
          {section.options.map((option) => (
            <CheckBox key={option} label={option} checked />
          ))}
        </div>
      </div>
    ));
  };

  return <div>{renderFilterSections()}</div>;
}
