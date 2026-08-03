// === Utils ===
import { redirect } from "next/navigation";
import { getCourses } from "../../../../lib/courses";

// === Generate Static Params ===
export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({
    slug: course.slug,
  }));
}

// === Component ===
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string; class: string }>;
}) {
  const { slug } = await params;
  return redirect(`/courses/${slug}/index`);
}
