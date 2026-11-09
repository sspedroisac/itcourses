/* eslint-disable react-hooks/set-state-in-effect */

"use client";

// === Components ===
import { Link } from "@/i18n/navigation";
import { Book, Star } from "lucide-react";
import ProgressBar from "../ProgressBar";

// === Utils ===
import { useState, useEffect } from "react";
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
  iconBgColor = "bg-surface-muted",
  slug,
}: CourseCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (slug) {
      console.log(`Toggling favorite for course: ${slug}`);
      e.preventDefault();
      toogleFavoriteCourse(slug);
      setIsFavorite(!isFavorite);
    }
  };

  useEffect(() => {
    setIsFavorite(isCourseFavorite(slug || ""));
  }, [slug]);

  return (
    <Link
      href={{
        pathname: "/courses/[slug]/[class]",
        params: { slug, class: "index" },
      }}
    >
      <div className="flex flex-col gap-4 rounded border border-border bg-surface p-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div
              className={twMerge(
                `w-12 h-12 rounded bg-surface-muted flex items-center justify-center`,
                iconColor,
                iconBgColor,
              )}
            >
              {icon || <Book />}
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <p className="font-bold text-olive">{title}</p>
              {totalClassesCount && (
                <span className="text-muted-foreground">
                  {totalClassesCount} Classes
                </span>
              )}
            </div>
          </div>
          <button
            className={`cursor-pointer text-muted-foreground ${isFavorite ? "text-yellow-500" : ""}`}
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
