// === Utils ===
import { redirect } from "next/navigation";

// === Page ===
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string; class: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  return redirect(`/${locale}/courses/${slug}/index`);
}
