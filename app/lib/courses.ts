import fs from "fs/promises";
import path from "path";

export async function getCourses(query?: string) {
  const coursesDir = path.join(process.cwd(), "content", "courses");

  const directories = await fs.readdir(coursesDir);

  const courses = await Promise.all(
    directories.map(async (slug) => {
      const file = path.join(coursesDir, slug, "course.json");

      const json = await fs.readFile(file, "utf8");

      const courseData = JSON.parse(json);

      return {
        slug,
        title: courseData.title,
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
