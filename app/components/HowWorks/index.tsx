// === Components ===
import SectionInfo from "../SectionInfo";
import StepCard from "../StepCard";
import { Book, BookOpen } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

// === Utils ===
import { getTranslations } from "next-intl/server";

// === Component ===
export default async function HowWorks({ locale }: { locale: string }) {
  const t = await getTranslations({
    locale,
    namespace: "howWorks",
  });

  const steps = [
    {
      step: 1,
      title: t("steps.step1.title"),
      icon: <Book size={24} />,
      description: t("steps.step1.description"),
    },
    {
      step: 2,
      title: t("steps.step2.title"),
      icon: <BookOpen size={24} />,
      description: t("steps.step2.description"),
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
        title={t("title")}
        description={t("description")}
        linkHref="/courses"
        linkText={t("cta")}
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {renderSteps()}
      </div>
    </SectionWrapper>
  );
}
