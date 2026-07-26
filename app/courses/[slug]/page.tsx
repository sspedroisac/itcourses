// redirect to /courses/[slug]/index if the user tries to access /courses/[slug]/
import { redirect } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string; class: string }>;
}) {
  const { slug } = await params;
  return redirect(`/courses/${slug}/index`);
}
