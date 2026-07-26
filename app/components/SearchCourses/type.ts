export interface SearchCoursesProps {
  courses: {
    slug: string;
    title: string;
    totalClassesCount: number;
  }[];
}
