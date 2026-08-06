/* eslint-disable @typescript-eslint/no-explicit-any */

// === Components ===
import CourseContent from "../../../../../components/CourseContent";

// === Utils ===
import { getCourses } from "../../../../../lib/courses";
import { routing } from "@/i18n/routing";

// === SSG ===
export async function generateStaticParams() {
  const params = [];

  for (const locale of routing.locales) {
    const courses = await getCourses("", locale);

    params.push(
      ...courses.flatMap((course) =>
        course.modules.flatMap((module: any) =>
          module.classes.map((courseClass: any) => ({
            locale,
            slug: course.slug,
            class: courseClass.slug,
          })),
        ),
      ),
    );
  }

  return params;
}

// === Page ===
export default async function ClassPage({
  params,
}: {
  params: Promise<{
    slug: string;
    class: string;
    locale: string;
  }>;
}) {
  const { slug, class: slugClass, locale } = await params;

  return <CourseContent slug={slug} slugClass={slugClass} locale={locale} />;
}
