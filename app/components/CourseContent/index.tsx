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
    <div className="rounded border-b border-r border-border bg-surface pr-1 pb-1 shadow-2xs">
      <div className="rounded border-b border-r border-border pr-1 pb-1">
        <div className="rounded border border-border p-4">
          <article className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {courseClass.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
