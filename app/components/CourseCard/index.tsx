"use client";

// === Components ===
import { Link } from "@/i18n/navigation";
import { Book, Star } from "lucide-react";
import ProgressBar from "../ProgressBar";

// === Utils ===
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CourseCardProps } from "./types";
import { toogleFavoriteCourse, isCourseFavorite } from "../../lib/favorites";

// === Component ===
export default function CourseCard({
  title,
  totalClassesCount,
  progress,
  progressColor = "bg-primary",
  icon,
  iconColor = "text-primary",
  iconBgColor = "bg-blue-100",
  slug,
}: CourseCardProps) {
  const [isFavorite, setIsFavorite] = useState(isCourseFavorite(slug || ""));

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (slug) {
      console.log(`Toggling favorite for course: ${slug}`);
      e.preventDefault();
      toogleFavoriteCourse(slug);
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <Link
      href={{
        pathname: "/courses/[slug]/[class]",
        params: { slug, class: "index" },
      }}
    >
      <div className="border border-olive-200 p-4 rounded flex flex-col gap-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div
              className={twMerge(
                `bg-blue-100 w-12 h-12 rounded flex items-center justify-center`,
                iconColor,
                iconBgColor,
              )}
            >
              {icon || <Book />}
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <p className="font-bold text-olive">{title}</p>
              {totalClassesCount && (
                <span className="text-olive opacity-70">
                  {totalClassesCount} Classes
                </span>
              )}
            </div>
          </div>
          <button
            className={`text-olive opacity-70 cursor-pointer ${isFavorite ? "text-yellow-500" : ""}`}
            onClick={handleFavoriteClick}
          >
            <Star fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
        {(progress || progress === 0) && (
          <ProgressBar progress={progress} color={progressColor} />
        )}
      </div>
    </Link>
  );
}
