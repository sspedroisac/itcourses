// === utils ===
import { CourseContentProps } from "./types";

// === Component ===
export default function CourseContent({ content }: CourseContentProps) {
  return (
    <div className="border border-gray-200 rounded p-4 shadow-2xs">
      {content}
    </div>
  );
}
