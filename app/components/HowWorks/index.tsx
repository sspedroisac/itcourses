import SectionInfo from "../SectionInfo";

export default function HowWorks() {
  return (
    <section className="w-full">
      <div className="w-full max-w-site-w mx-auto px-site-px py-20">
        <SectionInfo
          title="How It Works"
          description="Learn how our platform works in a few simple steps."
          linkHref="/"
          linkText="Explore Courses"
        />
      </div>
    </section>
  );
}
