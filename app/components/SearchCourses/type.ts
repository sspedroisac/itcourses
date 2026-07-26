export interface SearchCoursesProps {
  courses: {
    slug: string;
    title: string;
    modulesCount: number;
  }[];
}
