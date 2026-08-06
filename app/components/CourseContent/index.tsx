// === Components ===
import ReactMarkdown from "react-markdown";

// === utils ===
import { CourseContentProps } from "./types";
import { getClass } from "../../lib/courses";
import remarkGfm from "remark-gfm";

// === Component ===
export default async function CourseContent({
  slug,
  slugClass,
  locale,
}: CourseContentProps) {
  const courseClass = await getClass(slug, slugClass, locale);

  return (
    <div className="border border-gray-200 rounded p-4 shadow-2xs">
      <article className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {courseClass.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
