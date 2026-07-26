// === Components ===
import ReactMarkdown from "react-markdown";

// === utils ===
import { CourseContentProps } from "./types";
import { getClass } from "../../lib/courses";

// === Component ===
export default async function CourseContent({
  slug,
  slugClass,
}: CourseContentProps) {
  const courseClass = await getClass(slug, slugClass);

  return (
    <div className="border border-gray-200 rounded p-4 shadow-2xs">
      <article className="prose max-w-none">
        <ReactMarkdown>{courseClass.content}</ReactMarkdown>
      </article>
    </div>
  );
}
