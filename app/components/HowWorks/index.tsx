// === Components ===
import SectionInfo from "../SectionInfo";
import StepCard from "../StepCard";
import { Book, BookOpen } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

// === Component ===
export default function HowWorks() {
  const steps = [
    {
      step: 1,
      title: "Choose your course",
      icon: <Book size={24} />,
      description:
        "Find the course that best fits your needs and start learning today. Our platform offers a wide range of courses to help you achieve your goals.",
    },
    {
      step: 2,
      title: "Complete the course",
      icon: <BookOpen size={24} />,
      description:
        "Complete the course at your own pace and gain valuable knowledge and skills.",
      iconWrapperClassName: "bg-green-100 text-green-600",
      stepWrapperClassName: "bg-green-600 text-white",
    },
  ];

  const renderSteps = () => {
    return steps.map(
      ({
        step,
        title,
        description,
        icon,
        iconWrapperClassName,
        stepWrapperClassName,
      }) => (
        <StepCard
          key={step}
          step={step}
          title={title}
          description={description}
          icon={icon}
          iconWrapperClassName={iconWrapperClassName}
          stepWrapperClassName={stepWrapperClassName}
        />
      ),
    );
  };

  return (
    <SectionWrapper>
      <SectionInfo
        title="How It Works"
        description="Learn how our platform works in a few simple steps."
        linkHref="/"
        linkText="Explore Courses"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {renderSteps()}
      </div>
    </SectionWrapper>
  );
}
