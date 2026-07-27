/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from "node:fs/promises";
import path from "node:path";

const getTotalClassesCount = (modules: any[]) => {
  return modules.reduce((acc, module) => acc + module.classes.length, 0);
};

export async function getCourses(query?: string) {
  const coursesDir = path.join(process.cwd(), "app", "content", "courses");

  const directories = await fs.readdir(coursesDir);

  const courses = await Promise.all(
    directories.map(async (slug) => {
      const file = path.join(coursesDir, slug, "course.json");

      const json = await fs.readFile(file, "utf8");

      const courseData = JSON.parse(json);

      return {
        slug,
        title: courseData.title,
        totalClassesCount: getTotalClassesCount(courseData.modules),
        modulesCount: courseData.modules.length,
      };
    }),
  );
  return query
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(query.toLowerCase()),
      )
    : courses;
}

export async function getCourse(slug: string) {
  const file = path.join(
    process.cwd(),
    "app",
    "content",
    "courses",
    slug,
    "course.json",
  );

  const json = await fs.readFile(file, "utf8");

  const courseData = JSON.parse(json);

  return {
    slug,
    title: courseData.title,
    modulesCount: courseData.modules.length,
    totalClassesCount: getTotalClassesCount(courseData.modules),
    modules: courseData.modules,
  };
}

export async function getClass(slug: string, slugClass: string) {
  const file = path.join(
    process.cwd(),
    "app",
    "content",
    "courses",
    slug,
    `${slugClass}.md`,
  );

  try {
    const content = await fs.readFile(file, "utf8");

    return {
      slug,
      slugClass,
      content,
    };
  } catch (error) {
    return {
      slug,
      slugClass,
      content: "Class not found",
    };
  }
}
